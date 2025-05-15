---
title: Concurrency model
---

Transactions committed to the ledger are fully atomic and serialized, supported by two separate and ordered concurrency-control mechanisms effectively preventing race-conditions:

1. Pre-commit in-memory or Redis-based locking
2. Optimistic locking

## Transaction commit flow

![flow](/img/advanced/concurrency-model.png)

## Concurrency Control Mechanisms

### Pre-commit Locking

The pre-commit locking mechanism prevents race conditions by acquiring locks on affected accounts before a transaction is committed. This can be implemented in two ways:

1. **In-memory Locking**: Used for single-instance deployments, this mechanism uses in-process locks to prevent concurrent modifications to the same accounts.
2. **Redis-based Locking**: Used for multi-instance deployments, this mechanism uses Redis to coordinate locks across multiple instances.

The pre-commit locking mechanism is the first line of defense against race conditions and helps to reduce the number of conflicts that need to be handled by the optimistic locking mechanism.

### Optimistic Locking

The optimistic locking mechanism is used during the commit phase to detect conflicts that may have occurred despite the pre-commit locking. It works by:

1. Reading the current state of the affected accounts
2. Performing the transaction operations
3. Verifying that the state hasn't changed before committing

If the state has changed, the transaction is aborted and a 409 Conflict response is returned to the client.

## PostgreSQL Row-Level Locking

The ledger uses PostgreSQL's row-level locking with the `FOR UPDATE` clause to lock balances during transaction processing:

```sql
SELECT * FROM balances WHERE account = $1 FOR UPDATE
```

This ensures that no other transaction can modify the same balances until the current transaction is committed or rolled back.

## Recommendation for multi-instances deployments

Due to the sequential nature of the ledger, multiple instances deployments should be carefully configured.

We recommended to use the Redis-based shared pre-commit lock using the [redis flags](../operator/09-Configuration%20reference/01-Settings.md). While the optimistic lock will ultimately be there to prevent race-conditions on commit, using the shared lock will reduce such commit attempts in the first place, yielding better performance for write heavy workloads.

Also, you can find a complete docker-compose example using 3 instances of the ledger, and a simple reverse proxy to handle traffic [there](https://github.com/formancehq/ledger/blob/main/examples/multi-node/docker-compose.yml).

Should the optimistic locking prevent a conflict on commit, it will surface it to the API consumer with a ([Response 409](../api#tag/transactions/operation/createTransaction)) - it is the responsibility of the client to retry the transaction in this case.
