# Performance model

The Formance Ledger is designed to handle high transaction volumes while maintaining data consistency. This document explains the performance characteristics of the ledger and how to optimize it for your specific use case.

## Performance characteristics

The ledger's performance is influenced by several factors:

- **Transaction complexity**: Simple transactions process faster than complex ones
- **Account contention**: Transactions involving the same accounts are processed sequentially
- **Feature configuration**: Enabled features affect processing overhead
- **Database performance**: The underlying PostgreSQL database's performance

## Optimizing for throughput

To achieve higher transaction throughput:

1. **Use buckets for isolation**: Buckets (PostgreSQL schemas) allow horizontal scaling by isolating different sets of accounts
2. **Configure features selectively**: Enable only the features you need
3. **Use bulk operations**: Process multiple operations in a single request
4. **Minimize account contention**: Design your account structure to reduce locking on frequently used accounts

## Feature impact on performance

Different ledger features have varying impacts on performance:

| Feature | Performance Impact | When to Use |
|---------|-------------------|-------------|
| HASH_LOGS | High (uses ledger-wide locks) | When you need strong audit guarantees |
| MOVES_HISTORY | Medium | When you need detailed movement history |
| ACCOUNT_METADATA_HISTORY | Low | When you need to track metadata changes |
| INDEX_ADDRESS_SEGMENTS | Low | When you frequently query by address segments |

## Benchmarking

The ledger includes benchmarking tools to help you measure performance in your environment:

```shell
earthly +run --args="-benchtime 10s --ledger.url=http://localhost:3068"
```

You can generate performance graphs using:

```shell
earthly +generate-graphs
```

## Scaling strategies

For high-volume applications:

1. **Vertical scaling**: Increase database resources for better performance
2. **Horizontal scaling**: Use multiple buckets to distribute load
3. **Read replicas**: Use database read replicas for query-heavy workloads
4. **Caching**: Implement application-level caching for frequently accessed data

## Performance monitoring

Monitor these metrics to identify performance bottlenecks:

- Transaction processing time
- Database query performance
- Lock contention rates
- Resource utilization (CPU, memory, disk I/O)
