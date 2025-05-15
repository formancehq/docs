---
title: Hash System
---

# Hash System

The Formance Ledger implements a hash system to ensure data integrity and provide an audit trail for all operations. This document explains how the hash system works and how it can be configured.

## Overview

The hash system creates a chain of cryptographic hashes for all logs in the ledger. Each log entry contains a hash that is computed based on the previous log's hash and the current log's data. This creates a tamper-evident chain of logs that can be verified for integrity.

## Configuration

The hash system is controlled by the `HASH_LOGS` feature, which can be set to either `SYNC` or `DISABLED`:

```json
{
  "features": {
    "HASH_LOGS": "SYNC"
  }
}
```

- `SYNC`: Enables the hash system, creating a chain of hashes for all logs
- `DISABLED`: Disables the hash system

By default, the hash system is enabled (`SYNC`).

## Implementation

The hash system is implemented in the following components:

### Log Structure

Each log entry in the ledger contains the following fields related to hashing:

- `ID`: A unique identifier for the log
- `Hash`: The cryptographic hash of the log
- `Date`: The timestamp when the log was created
- `Type`: The type of log (e.g., `NEW_TRANSACTION`, `SET_METADATA`, etc.)
- `Data`: The payload of the log

### Hash Computation

The hash of a log is computed using the SHA-256 algorithm and includes:

1. The hash of the previous log (if any)
2. The type of the log
3. The data payload of the log
4. The timestamp of the log
5. The idempotency key (if any)

```go
func (l *Log) ComputeHash(previous *Log) {
    digest := sha256.New()
    enc := json.NewEncoder(digest)

    if previous != nil {
        if err := enc.Encode(previous.Hash); err != nil {
            panic(err)
        }
    }

    // Encode the log data
    if err := enc.Encode(struct {
        Type           LogType   `json:"type"`
        Data           any       `json:"data"`
        Date           time.Time `json:"date"`
        IdempotencyKey string    `json:"idempotencyKey"`
        ID             int       `json:"id"`
        Hash           []byte    `json:"hash"`
    }{
        Type:           l.Type,
        Data:           payload,
        Date:           l.Date,
        IdempotencyKey: l.IdempotencyKey,
        ID:             0,
        Hash:           l.Hash,
    }); err != nil {
        panic(err)
    }

    l.Hash = digest.Sum(nil)
}
```

### Database Implementation

When the hash system is enabled, the ledger uses a PostgreSQL trigger to compute the hash of each log entry before it is inserted into the database:

```sql
create trigger "set_log_hash_{{.ID}}"
before insert
on "{{.Bucket}}"."logs"
for each row
when (
    new.ledger = '{{.Name}}'
)
execute procedure "{{.Bucket}}".set_log_hash();
```

The `set_log_hash()` function retrieves the previous log entry and computes the hash based on the previous hash and the current log data.

### Concurrency Control

To ensure that the hash chain is consistent, the ledger uses advisory locks when inserting logs:

```go
if store.ledger.HasFeature(features.FeatureHashLogs, "SYNC") {
    _, err := store.db.NewRaw(`select pg_advisory_xact_lock(?)`, store.ledger.ID).Exec(ctx)
    if err != nil {
        return postgres.ResolveError(err)
    }
}
```

This ensures that only one transaction at a time can insert logs, preventing race conditions that could break the hash chain.

## Verification

The hash chain can be verified by:

1. Starting with the first log entry (which has no previous hash)
2. Computing the hash of each log entry based on the previous hash and the log data
3. Comparing the computed hash with the stored hash

If any log entry has been tampered with, the computed hash will not match the stored hash, indicating a breach of data integrity.

## Use Cases

The hash system is useful for:

1. **Audit Trails**: Providing a tamper-evident record of all operations
2. **Data Integrity**: Ensuring that log data has not been modified
3. **Compliance**: Meeting regulatory requirements for data integrity and audit trails

## Performance Considerations

Enabling the hash system adds some overhead to log insertion operations due to:

1. The computation of the hash
2. The use of advisory locks to ensure consistency

For high-throughput applications, consider the trade-off between data integrity and performance when deciding whether to enable the hash system.
