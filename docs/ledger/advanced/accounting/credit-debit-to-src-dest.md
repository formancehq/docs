---
sidebar_position: 3
---

# Converting from credit / debit to source / destination

## The golden rule

The golden rule for converting a credit / debit accounting model to a source / destination model is:
- **Credit** becomes **Destination**
- **Debit** becomes **Source**

## Impact on the balance sheet

Now let's apply the golden rule to the balance sheet:

$$

Assets = Liabilities + Equity

$$

### Assets

Assets are also called debit normal accounts. They are increased by debits and decreased by credits.

Therefore, in the source / destination model, when an asset account is increased, the source component is increased, hence the balance is decreased, as per the balance equation: $Balance = Destination - Source$.

### Liabilities and Equity

Liabilities and equity are also called credit normal accounts. They are increased by credits and decreased by debits.

Therefore, in the source / destination model, when a liability account is increased, the destination component is increased, hence the balance is increased, as per the balance equation: $Balance = Destination - Source$.

## Convertion example

Now, let's convert common transactions from the credit / debit model to the source / destination model.

### Topping-up a wallet with a bank transfer

Let's consider a user topping-up their wallet with a bank transfer. To the business, the user wallet is a liability, and the bank account is an asset.

In the credit / debit model, the transaction would be:

Account | Debit | Credit
--- | --- | ---
User Wallet | $0 | $100
Bank Account | $100 | $0

By applying the golden rule, we get:

Account | Source | Destination
--- | --- | ---
User Wallet | $0 | $100
Bank Account | $100 | $0

From this, we can derive the balance of the accounts:

Account | Source | Destination | Balance
--- | --- | --- | ---
User Wallet | $0 | $100 | $100
Bank Account | $100 | $0 | -$100

### Transferring money between two wallets

Let's consider user 1 transferring $100 from their wallet to user 2's wallet. Both wallets are liabilities to the business.

We consider the following accounts:

Account | Balance
--- | ---
User 1 Wallet | $200
User 2 Wallet | $0

In the credit / debit model, the transaction would be:

Account | Debit | Credit
--- | --- | ---
User 1 Wallet | $100 | $0
User 2 Wallet | $0 | $100

Which would result in:

Account | Balance
--- | ---
User 1 Wallet | $100
User 2 Wallet | $100

By applying the golden rule, we get:

Account | Source | Destination
--- | --- | ---
User 1 Wallet | $100 | $0
User 2 Wallet | $0 | $100

From this, we can derive the balance of the accounts:

Account | Source | Destination | Balance
--- | --- | --- | ---
User 1 Wallet | $100 | $200 | $100
User 2 Wallet | $0 | $100 | $100

### Withdrawing money from a wallet

Let's consider a merchant withdrawing $50 from their wallet to their bank account. The wallet is a liability, and the app bank account, from which we initiate the bank transfer, is an asset.

We consider the following accounts:

Account | Balance
--- | ---
Merchant Wallet | $100
Bank Account | $1000


In the credit / debit model, the transaction would be:

Account | Debit | Credit
--- | --- | ---
Merchant Wallet | $50 | $0
Bank Account | $0 | $50

Which would result in:

Account | Balance
--- | ---
Merchant Wallet | $50
Bank Account | $950

By applying the golden rule, we get:

Account | Source | Destination
--- | --- | ---
Merchant Wallet | $50 | $0
Bank Account | $0 | $50

From this, we can derive the balance of the accounts:

Account | Source | Destination | Balance
--- | --- | --- | ---
Merchant Wallet | $50 | $100 | $50
Bank Account | $1000 | $50 | $950

### Treasury movement between two bank accounts

Let's consider a business moving $250 from a bank account located in the US to a bank account located in the UK. Both bank accounts are assets to the business.

We consider the following accounts:

Account | Balance
--- | ---
US Bank Account | $1000
UK Bank Account | $500

In the credit / debit model, the transaction would be:

Account | Debit | Credit
--- | --- | ---
US Bank Account | $0 | $250
UK Bank Account | $250 | $0

Which would result in:

Account | Balance
--- | ---
US Bank Account | $750
UK Bank Account | $750

By applying the golden rule, we get:

Account | Source | Destination
--- | --- | ---
US Bank Account | $0 | $250
UK Bank Account | $250 | $0

From this, we can derive the balance of the accounts:

Account | Source | Destination | Balance
--- | --- | --- | ---
US Bank Account | $1000 | $250 | -$750
UK Bank Account | $750 | $0 | -$750

:::warning
As we discussed above, asset account have a negative balance in the source / destination model.
:::


