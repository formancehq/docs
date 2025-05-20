---
title: Locking Model
---

The locking model in Formance Ledger ensures data consistency when multiple transactions attempt to modify the same accounts simultaneously. This document explains how the locking model works and how to configure it for your deployment.

## How the locking model works

Formance Ledger implements database-level locking to ensure transaction consistency:

1. **Pre-commit locking**: Before processing a transaction, the ledger locks the balance rows in the database for bounded source accounts (accounts with defined balance limits).
2. **Row-level database locks**: The ledger uses PostgreSQL's row-level locking with the `FOR UPDATE` clause to prevent concurrent modifications to the same account balances.

### Bounded source accounts

The ledger only locks balances for bounded source accounts - these are accounts used as transaction sources that have defined bottom limits. For example:

```
send [USD/2 100] {
  source = @bank
  destination = @user:1
}
```

In this example, `bank` is considered a bounded source account because it has an implicit bottom limit of zero (cannot go negative).

Accounts with unbounded overdraft or the special `world` account are not locked because they have no balance constraints:

```
send [USD/2 100] {
  source = @bank allowing unbounded overdraft
  destination = @user:1
}
```

### Locking strategies

The ledger supports two locking strategies:

#### Memory-based locking (default)

- Fast and efficient for single-instance deployments
- Locks are held in memory within a single ledger instance
- No external dependencies required
- Not suitable for multi-instance deployments (each instance has its own lock memory)

#### Redis-based locking

- Distributed locking mechanism for multi-instance deployments
- Uses Redis as a centralized lock manager
- Ensures locks are respected across all ledger instances
- Requires additional Redis infrastructure

## Configuration options

You can configure the locking strategy in your deployment settings:

### Memory-based locking (default)

No additional configuration is required for memory-based locking as it's the default.

### Redis-based locking

For multi-instance deployments, configure Redis-based locking:

```yaml
ledger:
  lockingStrategy:
    type: redis
    uri: redis://redis:6379
    tls: false
    lockDuration: 10s
    retryStrategy:
      attempts: 10
      delay: 10ms
      maxDelay: 500ms
```

## Performance considerations

The locking model has performance implications you should be aware of:

1. **Account contention**: Frequently modified accounts can become bottlenecks
   - Consider distributing transactions across multiple accounts when possible
   - For high-volume accounts, batch operations when appropriate

2. **Transaction size**: Larger transactions may lock more accounts
   - Keep transactions focused on related operations
   - Split unrelated operations into separate transactions

## Handling conflicts

When a conflict occurs during transaction processing, the ledger returns a 409 Conflict response. Your application should:

1. Catch the 409 response
2. Wait briefly (using exponential backoff for repeated conflicts)
3. Retry the transaction

## Best practices

When configuring your locking model:

1. **For single-instance deployments**: Use the default memory-based locking
2. **For multi-instance deployments**: Configure Redis-based locking
3. **Implement retry logic**: Handle 409 Conflict responses in your application
4. **Monitor lock contention**: Watch for frequent conflicts on specific accounts
5. **Distribute workload**: Design your account structure to minimize contention
