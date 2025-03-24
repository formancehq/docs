---
title: Data isolation with buckets
---

# Data isolation with buckets

Buckets are a way to isolate different ledgers within the same database server. This is useful when you want to separate data for different clients, or different applications, or different environments.

Buckets are implemented using PostgreSQL schemas. To isolate, the data, each bucket has its own schema. Then you can implement access control at the schema level to prevent access to data from one bucket to another.

## Creating a bucket

Buckets are automatically created when you create a new ledger. By default, if the bucket is not specified, the ledger is created in the `_default` bucket.

Using `fctl`, you can specify the bucket when creating a new ledger:

```bash
fctl ledger create <ledger-name> --bucket <bucket-name>
```

Alternatively, to create a ledger on a specific bucket, use the command:

```shell
$ curl -X POST http://localhost:3068/v2/testing -d '{"bucket": "bucket0"}'
$ curl http://localhost:3068/v2/testing | jq
{
  "data": {
    "bucket": "bucket0",
    "metadata": {},
    "features": {
      "ACCOUNT_METADATA_HISTORY": "SYNC",
      "HASH_LOGS": "SYNC",
      "INDEX_ADDRESS_SEGMENTS": "ON",
      "INDEX_TRANSACTION_ACCOUNTS": "ON",
      "MOVES_HISTORY": "ON",
      "MOVES_HISTORY_POST_COMMIT_EFFECTIVE_VOLUMES": "SYNC",
      "TRANSACTION_METADATA_HISTORY": "SYNC"
    },
    "id": 2,
    "name": "testing",
    "addedAt": "2024-10-03T08:27:11.540373Z"
  }
}
```

## Features

Each usage of the ledger service, is different.
Some usage involve a high write throughput, some other involve high read throughput, custom aggregation etc...

So, each ledger can be configured with a set of features. By default, when creating a ledger, all features are enabled.

To create a ledger with specific features, use the command:
```shell
$ curl -X POST http://localhost:3068/v2/testing2 -d '{"features": {"HASH_LOGS": "DISABLED"}}'
$ curl http://localhost:3068/v2/testing2 | jq
{
  "data": {
    "bucket": "_default",
    "metadata": {},
    "features": {
      "ACCOUNT_METADATA_HISTORY": "SYNC",
      "HASH_LOGS": "DISABLED",
      "INDEX_ADDRESS_SEGMENTS": "ON",
      "INDEX_TRANSACTION_ACCOUNTS": "ON",
      "MOVES_HISTORY": "ON",
      "MOVES_HISTORY_POST_COMMIT_EFFECTIVE_VOLUMES": "SYNC",
      "TRANSACTION_METADATA_HISTORY": "SYNC"
    },
    "id": 3,
    "name": "testing2",
    "addedAt": "2024-10-03T08:40:40.545229Z"
  }
}
```

When overriding features, all not specified features will receive the default configuration.

:::warning
Current set of feature is not stable, some can be added, or removed.
:::

## Current set of features

| Name                         | Default value | Possible configuration | Description                                                      |
|------------------------------|---------------|------------------------|------------------------------------------------------------------|
| ACCOUNT_METADATA_HISTORY     | SYNC          | SYNC \| DISABLED       | Historize metadata changes on accounts                           |
| TRANSACTION_METADATA_HISTORY | SYNC          | SYNC \| DISABLED       | Historize metadata changes on transactions                       |
| HASH_LOGS                    | SYNC          | SYNC \| DISABLED       | [Hash logs](#hashed-log)                                         |
| INDEX_ADDRESS_SEGMENTS       | ON            | ON \| OFF              | Index accounts addresses segments                                |
| INDEX_TRANSACTION_ACCOUNTS   | ON            | ON \| OFF              | Index transactions accounts set                                  |
| MOVES_HISTORY                | ON            | ON \| OFF              | [Historize funds movements by account](#funds-movements-history) |
| MOVES_HISTORY_POST_COMMIT_EFFECTIVE_VOLUMES | SYNC          | SYNC \| DISABLED       | Compute and maintains post commit effective volumes              |
 