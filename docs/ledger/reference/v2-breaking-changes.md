---
title: Ledger V2 API breaking changes
---

# Ledger V2 API breaking changes

Even though we strive to keep the Ledger API stable, there are some changes that are necessary to make in order to implement new features or improve the existing ones. This document lists all the breaking changes that have been made to the Ledger API.

## Removed Features

Once you upgrade to a new version of the Ledger API, the following features will no longer be available, even if they were available in the previous version.

- **Batch queries**: The ability to query multiple accounts in a single request has been removed. You must now query each account individually.
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
