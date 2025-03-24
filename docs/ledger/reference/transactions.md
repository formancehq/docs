---
title: Transactions
---
# Transactions

A transaction is a set of modifications applied to a set of accounts at a specific time. Transactions affect only the account components, not the balance, as the balance is derived from these components.

By altering components such as ingresses and egresses from the example above, transactions change the underlying details that will, in turn, update the overall balance of the accounts involved. This structured approach ensures that each financial movement is accurately recorded and reflected in the corresponding account balances through their components.

In a bank, customers can withdraw money from their accounts. This results in a transaction that decreases the customer's account balance. Since this account is composed of only one component, modifying this component is equivalent to manipulating the balance directly. For instance, if a customer withdraws \$100, the transaction reduces the balance by \$100, immediately reflecting this change in the account's overall balance.

In a food delivery app, when a customer pays for an order, a transaction occurs that affects multiple accounts simultaneously. This transaction decreases the customer's wallet balance while increasing the restaurant's earnings account and the rider's earnings account. Additionally, the platform's fees and taxes accounts are also adjusted accordingly. The crucial point is that all these modifications happen at the exact same time and are not partially applied. This ensures that the financial records remain accurate and consistent, reflecting the complete and instantaneous impact of the transaction across all relevant accounts.

An important distinction between ledger solutions is the transaction model they uses underneath.

There are multiple options there, the key distinctions you'll find in the wild being the number of postings per transactions and the number of i/o per postings. Formance uses single i/o postings with multi-postings transactions.

## Postings
In Formance and in general, postings model the movement of an amount of an asset from one account to another, e.g. Alice giving 100 coins to Bob:
```json
{
  "source": "alice",
  "destination": "bob",
  "asset": "COIN",
  "amount": 100
}
```

## Transactions
In Formance, transactions model the wrapping of postings with the intent of committing them atomically, e.g. Alice trading coins for gems over the counter:
```json
{
  "postings": [
    {
      "source": "alice",
      "destination": "teller",
      "amount": 100,
      "asset": "COIN"
    },
    {
      "source": "teller",
      "destination": "alice",
      "amount": 5,
      "asset": "GEM"
    }
  ]
}
```
The rationale behind single i/o postings w/ multi-postings transactions originates from Formance's goal: help developers build sound financial applications, and supported by these observations:

* Multi-postings transactions allows the ledger to leverage atomicity to reduce the complexity on your side to handle complex transactions, e.g credit this user of X coin by funding the credit from multiple other accounts.

* While mathematically correct, multi i/o postings are inherently hard to grasp mentally and make auditability a challenge, which goes against our stated goal.

* In any-case, if needed, multi-postings transactions can be used to model multi i/o postings - by using a transient account, that receives all funds and resends them in a single transaction
