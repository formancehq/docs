---
sidebar_position: 2
---

# The source / destination model

The source / destination model is the accounting model used by the Formance Ledger. It has benn chosen over the classical double-entry accounting model for the following reasons:
- **Optimized for balance :** you make sure your pay-in is correct, then the ledger makes sure you don't use more than you have available.
- **Inventory of funds**: this models store funds in such a way that the ledger can be treated as an inventory management system for cash on which you can build up complex flows of funds.
- **Prevent cash creation**: the source / destination model prevents the creation of cash out of thin air, which is a common issue in double-entry accounting.

## Accounts

An account in the source / destination model is a container for funds. An account can contain multiple assets, each with a different balance. For example, an account can contain a balance in USD, EUR, and BTC. 

For each asset, the account has a source and a destination components. The source component represents the amount of funds that have been added to the account, while the destination component represents the amount of funds that have been removed from the account. These two components are add-only, meaning that you can only add funds by increasing the source component and remove funds by increasing the destination component.

### Balance equation

The balance of an account is calculated by subtracting the destination component from the source component. The balance equation is as follows:

$$

Balance = Destination - Source

$$

## Transactions

A transaction in the source / destination model is a set of modifications applied to a set of accounts at a specific time. 

Transactions are composed of **postings**, which describe the modifications applied to the accounts. A posting is a triplet composed of an account, the component to modify (either source or destination), and the amount to add to the component.

### Transaction example

Let's consider two accounts: **account 1** and **account 2**. Account 1 has a balance of 100 USD and account 2 has a balance of 0 USD.

The following tables represent the state of the accounts with their source and destination components:

| Account | Source | Destination | Balance |
|---------|--------|-------------|---------|
| Account 1 | 0 | 100 | 100
| Account 2 | 0 | 0 | 0

Now, let's create a transaction that transfers 50 USD from **account 1** to **account 2**. The transaction is composed of following posting:

| Account | Source | Destination
|---------|--------|-------------
| Account 1 | 50 | 0

After applying the transaction, the state of the accounts is as follows:

| Account | Source | Destination | Balance |
|---------|--------|-------------|---------|
| Account 1 | 50 | 100 | 50
| Account 2 | 0 | 50 | 50


## Constraints

The source / destination model enforces the following constraints to ensure the integrity of the system:

- **Constraint 1:** The sum of the source components of all accounts must be equal to the sum of the destination components of all accounts. This ensures that no cash is created out of thin air. In other words, the ledger-wide balance must always be zero.
- **Constraint 2:** Within a transaction, the sum of cash added to the source components must be equal to the sum of cash added to the destination components. This ensures that the transaction is balanced and that no cash is created or destroyed during the transaction.
- **Constraint 3:** An account cannot have a negative balance, unless it is explicitly allowed. This ensure that you cannot create cash out of thin air by arbitrarily setting a negative balance in a random account.

These constraints ensure that the ledger remains consistent and that no cash is created or destroyed during the course of normal operations. 

### Inserting cash into the system

To insert cash into the system, you can either:
- use a special account called the **world account**. This account is allowed to have a negative balance, which means that it can absorb cash from other accounts.
- use **counter-part accounts** that are allowed to have a negative balance. For example, if you have a set of order accounts, you can create counter-parts accounts that represent payment-methods such as credit cards or bank transfers. These accounts can have a negative balance, which means that they can absorb cash from the order accounts.

**Note**: The way you insert cash into the system will depend on your specific use case and the structure of your accounts.

#### Example: Using the world account

Let's consider the following accounts with a balance of 0 USD:

| Account | Source | Destination | Balance |
|---------|--------|-------------|---------|
| Account 1 | 0 | 0 | 0

We want to insert 100 USD into the system. We'll do this by using the world account method.

The transaction is composed of two postings:

| Account | Source | Destination
|---------|--------|-------------
| Account 1 | 0 | 100
| World  | 100 | 0

After applying the transaction, the state of the accounts is as follows:

| Account | Source | Destination | Balance |
|---------|--------|-------------|---------|
| Account 1 | 0 | 100 | 100
| World  | 100 | 0 | -100

In this example, the world account has a negative balance of 100 USD, which means that it has absorbed 100 USD from account 1. 

#### Example: Using counter-part accounts

Let's consider the following accounts with a balance of 0 USD:

| Account | Source | Destination | Balance |
|---------|--------|-------------|---------|
| `order:1234:paid` | 0 | 0 | 0
| `payment-method:credit-card` | 0 | 0 | 0
| `payment-method:bank-transfer` | 0 | 0 | 0

A customer orders \$100 worth of products and have paid with \$50 with a credit card and the rest with a bank transfer. We'll use the counter-part accounts method to insert cash into the system.

The payment transaction is composed of three postings:

| Account | Source | Destination
|---------|--------|-------------
| `order:1234:paid` | 0 | 100
| `payment-method:credit-card` | 50 | 0
| `payment-method:bank-transfer` | 50 | 0

After applying the transaction, the state of the accounts is as follows:

| Account | Source | Destination | Balance |
|---------|--------|-------------|---------|
| `order:1234:paid` | 0 | 100 | 100
| `payment-method:credit-card` | 50 | 0 | -50
| `payment-method:bank-transfer` | 50 | 0 | -50

:::info{title="Counter-part accounts and reconciliation"}
Counter-part accounts are a powerful tool to manage cash flows in the source / destination model. By mapping them to your financial partners, you can easily reconcile your accounts with external systems and make sure that your ledger remains consistent.
:::

## Invalid transaction

### Creating cash out of thin air

Let's consider the following accounts with a balance of 0 USD:

| Account | Source | Destination | Balance |
|---------|--------|-------------|---------|
| Account 1 | 0 | 0 | 0

We want to insert 100 USD into the system by adding 100 USD to account 1's source component.

The transaction is composed of one posting:

| Account | Source | Destination
|---------|--------|-------------
| Account 1 | 0 | 100

This transaction is invalid because it violates the first and second constraints, which states that the sum of the source components must be equal to the sum of the destination components. In this case, the sum of the source components is 100, while the sum of the destination components is 0, which means that cash would be created out of thin air.

### Overspending

Let's consider the following accounts with a balance of 100 USD:

| Account | Source | Destination | Balance |
|---------|--------|-------------|---------|
| Account 1 | 0 | 100 | 100

We want to transfer 150 USD from account 1 to account 2.

The transaction is composed of two postings:

| Account | Source | Destination
|---------|--------|-------------
| Account 1 | 150 | 0
| Account 2 | 0 | 150

This transaction is invalid because it violates the third constraint, which states that an account cannot have a negative balance unless it is explicitly allowed. In this case, account 1 would have a negative balance of -50 USD, which is not allowed.


