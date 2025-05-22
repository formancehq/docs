# Concurrency model

The Formance Ledger is designed to handle concurrent operations while maintaining data consistency. This document explains how the concurrency model works and what it means for your applications.

## How concurrency is managed

The ledger uses several mechanisms to manage concurrent operations:

1. **SQL transactions**: All operations use database transactions with Read Committed isolation level
2. **Row-level locking**: Account balances are locked during transaction processing
3. **Advisory locks**: Used for ledger-wide operations like log hashing
4. **Deadlock prevention**: Accounts are locked in a consistent order to prevent deadlocks

## Transaction isolation

The ledger uses different PostgreSQL isolation levels depending on the operation:

- **Read Committed** (default): Used for standard operations like creating transactions
  - Each statement sees only data committed before it began
  - No dirty reads (seeing uncommitted data)
  - Possible non-repeatable reads (data can change between statements)

- **Serializable**: Used for import operations to ensure complete consistency
  - Provides the strictest isolation level
  - Prevents any concurrent modifications during import operations
  - Ensures data integrity when importing ledgers

## Account locking

When processing a transaction, the ledger:

1. Locks all source accounts involved in the transaction
2. Sorts accounts in a consistent order to prevent deadlocks
3. Handles non-existent accounts by inserting zero-balance rows to ensure proper locking
4. Computes and validates the transaction
5. Updates balances and commits the changes

This approach ensures that account balances remain consistent even under high concurrency.

## Concurrent transaction processing

When multiple transactions are submitted concurrently:

1. Transactions affecting different accounts can proceed in parallel
2. Transactions affecting the same accounts are serialized through row-level locks
3. The database handles deadlock detection automatically
4. If a deadlock occurs, one transaction will be rolled back and can be retried

## Considerations for application design

When designing applications that use the ledger:

- Group related operations into bulk requests when possible
- Handle potential concurrency errors with retries
- Design your account structure to minimize contention on frequently used accounts
- Be aware that high concurrency on the same accounts will lead to serialization

## Performance implications

The concurrency model has several performance implications:

- Transactions involving the same accounts will be processed sequentially
- The hash logs feature uses ledger-wide advisory locks that can become a bottleneck
- Using multiple buckets can help isolate different sets of accounts for better concurrency
- Bulk operations reduce locking overhead for related transactions
