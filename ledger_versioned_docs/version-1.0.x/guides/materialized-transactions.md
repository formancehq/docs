---
title: Materialized transactions
---

# Materialized transactions
Materialized transactions is a scheme that gets useful when you need to map a logical transaction with a financial transaction.

## Example

You are a marketplace and want to separate the logical concern of paying a seller and the financial way to materialize it in the real world.

Given a ledger using `sales:*` and `sellers:*` accounts, you can record the intent of paying a seller with a logical transaction:
```json
{
  "source": "sales:001",
  "destination": "sellers:042",
  "amount": 100,
  "asset": "USD/2"
}
```
But this transaction wouldn't do anything on its own apart from now having a positive balance on the seller account.

You now want the seller to be paid in the real world. This becomes a financial concern, which may be addressed by another team. Depending on how the order was paid, they may decide to materialize the logical transaction this way:
```json
{
  "source": "stripe:platform",
  "destination": "stripe:connect:acct_1234",
  "asset": "USD/2",
  "amount": 100
}
```
The last thing to do is to hint the ledger that these two transactions are related. This can be done per the materialized scheme, which specifies that the materializing transaction should have a `scheme/materialized/target_txid` attribute with the `txid` of the materialized transaction.

We'll stop here for now for the core concept. If you want to learn more on this, you can head to the in-depth guide on materializing transactions that focuses on the financial concern and covers advanced routing strategies.
