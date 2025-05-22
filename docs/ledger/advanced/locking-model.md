# Locking model

The Formance Ledger uses a robust locking model to ensure data consistency when multiple transactions are processed concurrently. This document explains how the locking system works and what it means for your applications.

## How it works

When you create a transaction in the ledger, the system:

1. Starts a SQL transaction with Read Committed isolation level
2. Locks the balances of all source accounts involved in the transaction
3. Computes and validates the transaction
4. Writes the transaction data to the database
5. Commits the SQL transaction, releasing all locks

This approach ensures that account balances remain consistent even under high concurrency.

## Account locking

The ledger uses PostgreSQL row-level locks to prevent concurrent modifications to the same accounts. When a transaction is being processed, the system:

- Locks all source accounts to prevent overdrafts
- Sorts accounts in a consistent order to prevent deadlocks
- Handles non-existent accounts by inserting zero-balance rows to ensure proper locking

## What this means for you

The locking model provides these benefits:

- **Consistency**: Account balances are always accurate, even with concurrent transactions
- **Overdraft protection**: Transactions that would overdraw an account will fail predictably
- **Deadlock prevention**: The system minimizes the risk of deadlocks by using consistent locking order

## Considerations for high-volume systems

If you're building a high-throughput application:

- Transactions involving the same accounts will be processed sequentially
- Consider using multiple ledgers with different buckets for horizontal scaling
- Batch related operations using the bulk API to reduce locking overhead

## Related features

The ledger's locking behavior can be affected by certain configuration options:

- **Buckets**: Using multiple buckets can help isolate different sets of accounts
- **Hash logs**: When enabled, this feature adds additional ledger-level locking
