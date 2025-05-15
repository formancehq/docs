---
title: Locking Model
---

# Locking Model

The Formance Ledger implements a robust locking model to ensure data consistency and prevent race conditions when multiple transactions are being processed concurrently. This document explains the locking mechanisms used in the ledger.

## Balance Locking

When creating a transaction, the ledger uses a two-phase process to ensure consistency:

1. **Pre-commit Locking**: Before committing a transaction, the ledger locks the affected accounts to prevent concurrent modifications.
2. **Optimistic Locking**: During the commit phase, the ledger uses optimistic locking to detect conflicts.

### PostgreSQL Row-Level Locking

The ledger uses PostgreSQL's row-level locking with the `FOR UPDATE` clause to lock balances during transaction processing. This ensures that no other transaction can modify the same balances until the current transaction is committed or rolled back.

```sql
SELECT * FROM balances WHERE account = $1 FOR UPDATE
```

### Transaction Writing Process

The process of writing a transaction follows these steps:

1. Begin a database transaction
2. Lock all affected balances using `FOR UPDATE`
3. Validate the transaction (check for constraints, etc.)
4. Write the transaction to the database
5. Update the balances
6. Commit the database transaction

If any step fails, the entire database transaction is rolled back, ensuring data consistency.

## Multi-Instance Deployments

For multi-instance deployments, the ledger provides additional locking mechanisms:

1. **Redis-based Shared Pre-commit Lock**: This distributed lock prevents race conditions across multiple instances.
2. **Optimistic Locking**: As a fallback, optimistic locking ensures that conflicts are detected and reported to the client.

## Conflict Resolution

When a conflict is detected during transaction processing, the ledger returns a 409 Conflict response to the client. It is the responsibility of the client to retry the transaction.

## Sequence Diagram

The following sequence diagram illustrates the process of creating a transaction with balance locking:

```
┌─────┐          ┌──────────┐          ┌────────────┐          ┌─────────┐
│ API │          │ Numscript │          │ Controller │          │ Storage │
└──┬──┘          └─────┬────┘          └─────┬──────┘          └────┬────┘
   │  CreateTransaction │                    │                      │
   │ ──────────────────>│                    │                      │
   │                    │                    │                      │
   │                    │ Compile            │                      │
   │                    │ ─────────────────> │                      │
   │                    │                    │                      │
   │                    │                    │ Begin Transaction    │
   │                    │                    │ ────────────────────>│
   │                    │                    │                      │
   │                    │                    │ Lock Balances        │
   │                    │                    │ ────────────────────>│
   │                    │                    │                      │
   │                    │                    │ Write Transaction    │
   │                    │                    │ ────────────────────>│
   │                    │                    │                      │
   │                    │                    │ Update Balances      │
   │                    │                    │ ────────────────────>│
   │                    │                    │                      │
   │                    │                    │ Commit Transaction   │
   │                    │                    │ ────────────────────>│
   │                    │                    │                      │
   │                    │ Return Result      │                      │
   │                    │ <─────────────────┐│                      │
   │                    │                    │                      │
   │ Return Result      │                    │                      │
   │ <──────────────────│                    │                      │
┌──┴──┐          ┌─────┴────┐          ┌─────┴──────┐          ┌────┴────┐
│ API │          │ Numscript │          │ Controller │          │ Storage │
└─────┘          └──────────┘          └────────────┘          └─────────┘
```

## Advisory Locks

In addition to row-level locking, the ledger also uses PostgreSQL advisory locks for certain operations:

```sql
SELECT pg_advisory_xact_lock(?)
```

These locks are used to ensure that certain operations are performed atomically across the entire database, not just at the row level.

## Recommendations

For optimal performance in multi-instance deployments:

1. Use the Redis-based shared pre-commit lock to reduce conflicts
2. Implement retry logic in clients to handle 409 Conflict responses
3. Consider sharding your data across multiple ledgers to reduce contention
