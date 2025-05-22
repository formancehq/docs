# Concurrency model

The Formance Ledger is designed to handle concurrent operations while maintaining data consistency. This document explains how the concurrency model works and what it means for your applications.

## How concurrency is managed

The ledger uses several mechanisms to manage concurrent operations:

1. **SQL transactions**: All operations use database transactions with Read Committed isolation level
2. **Row-level locking**: Account balances are locked during transaction processing
3. **Advisory locks**: Used for ledger-wide operations like log hashing
4. **Deadlock prevention**: Accounts are locked in a consistent order to prevent deadlocks

## Transaction isolation

The ledger uses PostgreSQL's Read Committed isolation level for most operations, which means:

- Each statement sees only data committed before it began
- No dirty reads (seeing uncommitted data)
- Possible non-repeatable reads (data can change between statements)

For import operations, the ledger uses Serializable isolation level to ensure complete consistency.

## Concurrent transaction processing

When multiple transactions are submitted concurrently:

1. Transactions affecting different accounts can proceed in parallel
2. Transactions affecting the same accounts are serialized through row-level locks
3. The database handles deadlock detection automatically
4. If a deadlock occurs, one transaction will be rolled back with an error

## Optimistic concurrency control

For metadata operations, the ledger uses optimistic concurrency control:

1. Read the current state
2. Make changes locally
3. Write changes if the state hasn't changed
4. Retry if the state has changed

## Bulk operations

The bulk API allows you to process multiple operations in a single request, which:

- Reduces network overhead
- Ensures all operations succeed or fail together
- Minimizes locking contention

## Considerations for application design

When designing applications that use the ledger:

- Group related operations into bulk requests when possible
- Handle potential concurrency errors with retries
- Design your account structure to minimize contention on frequently used accounts
- Be aware that high concurrency on the same accounts will lead to serialization
