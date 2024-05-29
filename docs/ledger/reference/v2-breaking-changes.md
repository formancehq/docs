---
title: Ledger V2 API breaking changes
---

# Ledger V2 API breaking changes

Even though we strive to keep the Ledger API stable, there are some changes that are necessary to make in order to implement new features or improve the existing ones. This document lists all the breaking changes that have been made to the Ledger API.

## Removed Features

Once you upgrade to a new version of the Ledger API, the following features will no longer be available, even if they were available in the previous version.

- **Batch operation**: The ability to batch multiple operations in a single request has been removed. You must now use the new `bulk` endpoint to perform bulk operations.
  Example:
  ```
  POST /<ledger>/_bulk
  [
    {"action": "CREATE_TRANSACTION", "data": {...}},
    ...
  ]
  ```
  The major difference is that the `bulk` endpoint **is not** transactional. If one of the operations fails, the others will still be executed. To prevent the same action from being executed multiple times, you can add an `idempotency-key` on individual actions.
- **Metadata format**: The ability to store metadata as a free-form JSON object on an account has been removed. You must now store metadata as a set of key-value pairs.
- **Volumes are not returned when creating a new transaction**: The volume of the created transaction is not returned in the response. You must query the transaction to get the volume.

## Changes on the V2 API

- **Point in time (PIT)**: Added the `pit` (point in time) query parameter for queries and transactions. This parameter allows you to query the ledger at a specific point in time. More information can be found on the [bi-temporality](../advanced/temporality.md) page.
- **Expand query**: Added the `expand` query parameter to the `accounts` and `transactions` endpoints. This parameter allows you to expand the results of the query to include additional information:
  - `expand=volumes`: Return the volumes as they were defined in the V1 API.
  - `expand=effectiveVolumes`: Return the effective volumes of the transactions.
- **Removed `/balances` endpoint**: The `/balances` endpoint has been removed.
- **Reverted field**: The `reverted` field has been added to the transaction response. This field indicates whether the transaction has been reverted or not.
- **`txid` field renamed to `id`**: The `txid` field has been renamed to `id` in the transaction response.
