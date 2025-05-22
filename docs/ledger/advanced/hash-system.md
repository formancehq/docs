# Hash system

The Formance Ledger includes an optional hash system that creates a cryptographically secure chain of transaction logs. This document explains how the hash system works and how to use it.

## What is the hash system?

The hash system creates a chain of hashed logs where each log entry contains a hash that includes the previous log's hash. This creates an immutable audit trail that can be verified for integrity.

## How it works

When the hash system is enabled:

1. Each log entry is assigned a sequential ID
2. The system computes a hash for each new log entry
3. The hash includes the previous log's hash, creating a chain
4. The system uses advisory locks to ensure sequential hashing

This creates a tamper-evident chain of logs that can be verified for integrity.

## Enabling the hash system

The hash system is controlled by the `HASH_LOGS` feature, which can be set when creating a ledger:

```shell
curl -X POST http://localhost:3068/v2/my-ledger -d '{"features": {"HASH_LOGS": "SYNC"}}'
```

Available options:
- `SYNC`: Enable hashing (default)
- `DISABLED`: Disable hashing

## Performance considerations

The hash system provides strong audit guarantees but comes with performance trade-offs:

- Uses ledger-wide advisory locks that can become a bottleneck for high write throughput
- Adds computational overhead for hash calculation
- Increases storage requirements for hash data

For high-throughput applications where audit guarantees are less critical, you may want to disable this feature.

## Verifying log integrity

You can verify the integrity of the log chain by:

1. Retrieving logs in sequential order
2. Recalculating each hash based on the log data and previous hash
3. Comparing the calculated hash with the stored hash

A mismatch indicates that the log chain has been tampered with.

## Use cases

The hash system is particularly valuable for:

- Financial applications requiring strong audit trails
- Regulatory compliance scenarios
- Applications where data integrity verification is essential
