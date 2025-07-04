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
