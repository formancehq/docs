---
title: Filtering queries
---

# Filtering queries

Ledger V2 comes with a number of operations allowing you to list resources such as transactions or accounts.

In some cases, you may want to filter the results to only include resources that match certain criteria. This is where filtering comes in.

## Filtering syntax

Filtering is done either:
- by using a query parameter named `query` and containing a JSON object describing the filter criteria.
- by sending the filter criteria as a JSON object in the body of the request.

Here is a value example:

```json
{
  "$match": { "source": "order::pending" }
}
```

In this example, we are filtering on a ledger account. The naming convention set on this account is the following: `order:XXXX:pending`

In order to get all accounts, with unique value `XXXX` of order segment, we use this regex-like syntax `order::pending`.

:::note
An address is divided into segments delimited by semi-colons `:`. If a segment is empty in the filter, it is interpreted as a wildcard match. Moreover, if the filter ends with a semi-colon, it is interpreted as an open-ended wildcard.
:::

For a metadata filter, the syntax is the following:

```json
{ "$match": { "metadata[foo]": "bar"} }
```

In this example, we are filtering on a metadata field named `foo` with the value `bar`.

## Combining filters

The root of the filter object has always a single key. This key is the operation to apply to the filter.

In order to combine filters, you can use the `$and` and `$or` operations.

Here is an example:

```json
{
  "$and": [
    { "$match": { "source": "order::pending" } },
    { "$match": { "metadata[foo]": "bar" } }
  ]
}
```

In this example, we are combining two filters using the `$and` operation. The result will only include resources that match both filters.

## Filtering operations reference

### Operations

The following operations are supported:

- `$and`/`$or`: Takes expression arrays as parameters.
- `$match`: Equality operator. Takes an object containing a single key/value pair as parameter.
- `$lt`: Lower. Same format as `$match`.
- `$lte`: Lower or equal. Same format as `$match`.
- `$gt`: Greater. Same format as `$match`.
- `$gte`: Greater than or equal to. Same format as `$match`.
- `$exists`: test the existence of a metadata
- `$not`: Inverse the result of the expression. Same format as `$match`.

### Filterable fields

Depending on the resource you are querying, you can filter on different fields. Here are the exhaustive list of fields you can filter on:

#### Accounts

- `address`: The address of the account.
- `metadata[XXX]`: The metadata field `XXX` of the account. You can use the `$exists` operator to test the existence of a metadata field, or the `$match` operator to filter on the value of a metadata field.
- `metadata`: The account metadata. You can use the `$exists` operator to test whether the account has metadata or not.
- `balance[ASSET]`: The balance of the account for the asset `ASSET`. You can use the `$lt`, `$lte`, `$gt`, `$gte`, or `$match` operators to filter on the balance.

#### Transactions

- `reference`: The reference of the transaction.
- `timestamp`: The timestamp of the transaction. Note that it is the time at which the transaction has occured, not the time at which it has been recorded in the ledger. See the reference documentation about [bi-temporality](./temporality.md) for more information.
- `reverted`: Whether the transaction has been reverted or not. You can use the `$match` with the value `true` or `false` to filter on this field.
- `account`: Either the `source` or the `destination` of the transaction. You can use the `$match` operator to filter on this field.
- `source`: The source account address of the transaction.
- `destination`: The destination account address of the transaction.
- `metadata[XXX]`: The metadata field `XXX` of the transaction. You can use the `$exists` operator to test the existence of a metadata field, or the `$match` operator to filter on the value of a metadata field.
- `metadata`: The transaction metadata. You can use the `$exists` operator to test whether the transaction has metadata or not.

#### Volumes

- `account`: The account address of the volume. You can use the `$match` operator to filter on this field.
- `metadata[XXX]`: The metadata field `XXX` of the volume. You can use the `$exists` operator to test the existence of a metadata field, or the `$match` operator to filter on the value of a metadata field.
- `metadata`: The volume metadata. You can use the `$exists` operator to test whether the volume has metadata or not.
- `balance[ASSET]`: The balance of the volume for the asset `ASSET`. You can use the `$lt`, `$lte`, `$gt`, `$gte`, or `$match` operators to filter on the balance.
