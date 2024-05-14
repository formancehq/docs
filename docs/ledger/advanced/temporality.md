# Bi-Temporality

This page covers the bi-temporality feature of the ledger as well as the impact of that feature on the ledger's data and the queries that can be run against it.

## Definition of bi-temporality

The ledger supports bi-temporality, which means that each transaction is associated with two timestamps:
- **Request time**: The time at which the transaction was submitted to the ledger.
- **Transaction time**: The time at which the transaction is considered to have occurred.

The ledger records both timestamps for each transaction, and the transaction time is used to determine the state of the ledger at a given point in time.

Bi-temporality is useful in the following scenarios:
- **Time travel**: The ability to query the ledger as it was at a specific point in time.
- **Correction of errors**: The ability to correct errors in the ledger by backdating or postdating transactions.
- **Auditing**: The ability to audit the ledger at a specific point in time.
- **Data import**: The ability to import data from external systems that use different timestamps.

## Implications of Bi-Temporality

Bi-temporality allows users to insert transaction at any point in time in the past or future. When a user performs a query on the ledger, the ledger state is determined based on the requested point in time. The ledger state is a snapshot of the ledger at the requested point in time, and it includes all transactions that have a transaction time equal to or less than the requested point in time.

This capability has some implications discussed below.

### Account and Trandsaction Metadata

Account and transaction metadata are not fixed in time. When a user queries the ledger at a specific point in time, the metadata associated with accounts and transactions is also determined based on the requested point in time. This means that the metadata associated with an account or transaction can change over time.

#### Example: Fraud management

Let's consider the following example. Suppose that a fraud engine is integrated with the ledger to flag suspicious account. It does so by adding `risk=high` to the account metadata. The fraud team regurlarly exports the suspicious accounts to an external system for further investigation. The fraud team queries the ledger at specific points in time to get the list of suspicious accounts.

Let's consider the account `customer:123456`. At a time `t1` the fraud engine marks the account as suspicious by adding `risk=high` to the account metadata. The fraud team exports the list of suspicious accounts at time `t2` and `t3`. The account will be included in the list of suspicious accounts in both exports.

![Initial state](./01%20-%20initial%20state.png)

Now, let's consider that the fraud engine removes the `risk=high` metadata from the account at time `t4` located between the two exports `t2` and `t3`. It does so by removing the `risk` metadata using a backdated transaction. In this case, the account will not be included in the list of suspicious accounts in the export at time `t3`.

![Final state](./02%20-%20final%20state.png)

### Backdated Transactions validation

#### Problem Statement

When a user inserts a transaction with a transaction time in the past, there is a risk that the transaction is invalid because it might yield an invalid state of the ledger.

Consider the following example account whose balance evolution is as follows:

Time | Transaction amount | New Balance 
--- | --- | ---
1 | 100 | 100
2 | -50 | 50
3 | -10 | 40
4 | 50 | 90
5 | -10 | 80

Now, consider that a user wants to insert a backdated transaction with a transaction time of 2 and an amount of `-100`. This transaction would yield the following balance evolution:

Time | Transaction amount | New Balance
--- | --- | ---
1 | 100 | 100
**2** | **-100** | **0**
3 | -50 | -50
4 | -10 | -60
5 | 50 | -10
6 | -10 | **-20**

The new balance at time 6 is `-20`, which is invalid because the account has a negative balance. This is an example of an invalid backdated transaction.

Now, consider that a user wants to insert a backdated transaction with a transaction time of 2 and an amount of `-50`, rather than `-100`. This transaction would yield the following balance evolution:

Time | Transaction amount | New Balance
--- | --- | ---
1 | 100 | 100
**2** | **-50** | **50**
3 | -50 | 0
4 | -10 | -10
5 | 50 | 40
6 | -10 | **30**

The new balance at time 6 is `30`, which is valid because the account has a positive balance. This is an example of a valid backdated transaction.

:::warning
Note that the intermediate balances might be negative, as it is the case at time 4 in the second example. The ledger does not validate the intermediate states of the ledger, only the final state.
:::

#### Validation Mechanism

The ledger does not validate backdated transaction the same way it validates usual transactions. To check that a backdated transaction is valid, the ledger computes the new current state of the ledger by applying the backdated transaction and all the transactions that occurred after the backdated transaction. If the new state is valid, the backdated transaction is accepted. Otherwise, the backdated transaction is rejected.

A backdated transaction is considered valid if it doesn't put any account in a negative balance in the new computed final state of the ledger. Keep in mind that the ledger does not validate the intermediate states of the ledger, only the final state.

The only exception to this rule are the accounts that have been allowed to overdraft within the transaction. These accounts can have a negative balance in the new computed final state of the ledger.
