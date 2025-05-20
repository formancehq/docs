---
title: Hash system
---

# Hash system

The hash system in Formance Ledger provides a cryptographic audit trail that ensures the integrity of your financial data. This document explains what the hash system is, how it works, and how to configure it for your needs.

## What is the hash system?

The hash system creates a cryptographic chain of transaction logs where each entry is mathematically linked to all previous entries. This creates an immutable record of all transactions that:

- Prevents tampering with historical data
- Enables verification of the complete transaction history
- Provides cryptographic proof that data hasn't been altered

The system works by calculating a SHA-256 hash for each new log entry that includes both the log's data and the previous log's hash, creating a continuous chain.

## When to use the hash system

The hash system is particularly valuable when:

- You need to maintain regulatory compliance with audit requirements
- You want cryptographic proof of transaction integrity
- You need to detect any unauthorized modifications to historical data
- You're building financial applications where data immutability is critical

## Configuration options

The hash system is controlled by the `HASH_LOGS` feature flag:

- **Enabled by default**: The hash system is active unless explicitly disabled
- **Can be disabled**: For performance-critical applications where audit trails are less important

You can disable the hash system at the bucket level when creating a new bucket:

```json
POST /api/ledger/_buckets
{
  "name": "high_throughput",
  "features": {
    "HASH_LOGS": false
  }
}
```

## Performance considerations

The hash system has performance implications you should be aware of:

1. **Write throughput**: The hash system adds overhead to each transaction commit
   - Each log requires computing a new hash
   - PostgreSQL advisory locks are used to ensure hash chain integrity
   - This can become a bottleneck for high-volume write operations

2. **Read operations**: The hash system has minimal impact on read operations
   - Querying transactions or balances is not significantly affected
   - Verification operations may add some overhead

For high-throughput applications where audit trails are not critical, consider disabling this feature to improve performance.

## Verifying the hash chain

While the ledger automatically maintains the hash chain integrity, you can verify it through the API:

1. Retrieve a transaction log with its hash
2. Retrieve the previous log with its hash
3. Independently calculate the hash using the log data and previous hash
4. Compare your calculated hash with the stored hash

If they match, the chain is intact up to that point. This verification can be performed on any segment of the chain.

## Best practices

When using the hash system:

1. **Consider your performance needs**: Disable the feature if you prioritize throughput over audit trails
2. **Implement periodic verification**: Regularly verify the hash chain integrity for critical data
3. **Document hash verification**: Include hash verification in your compliance documentation
4. **Balance with other features**: Consider the combined impact of enabled features on performance
