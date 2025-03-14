---
title: Accounts
---

An account is a container for assets. Its primary function is to group assets together based on criteria that best suit the business's needs. This grouping helps organize and manage assets efficiently, making it easier to track financial information and understand the business's financial position. Businesses can maintain a clear and structured financial record by categorizing assets into different accounts, facilitating better decision-making and financial planning.

For example, in a bank, accounts are used to group money by customer, ensuring each customer has their own account. This system allows the bank to keep track of each customer's funds separately, providing clarity and precision in managing financial resources. By assigning individual accounts, banks can offer personalized services and maintain accurate records of each customer's deposits, withdrawals, and other transactions.

In a food delivery app, accounts are used to organize financial activities efficiently. Each restaurant has an account to manage their earnings from orders. Riders have accounts to track their delivery payments. Customers have accounts for their wallets, where they can add and spend money for orders. The platform itself maintains separate accounts for their service fees and taxes. This system ensures that all financial transactions are clearly categorized, making managing and overseeing the app's overall financial operations easier.

In the previous examples, accounts were modeled by just a balance, but they can contain more granular information called components. These components provide a detailed breakdown of the account's activities. For instance, you can record both ingresses and egresses within an account. Ingresses represent money coming into the account, such as deposits or earnings, while egresses represent money leaving the account, such as withdrawals or expenses. This detailed information helps businesses understand not just the overall balance but also the flow of assets in and out of each account, offering a clearer picture of financial health and activity.

## Balance equation

The account balance equation is the method used to combine an account's components to compute its overall balance. When an account has only one component, calculating the balance is straightforward. However, when an account has multiple components, the balance equation can become more complex.

For example, in a situation where an account tracks both ingresses and egresses, the balance equation would involve subtracting the egresses from the ingresses. 

$$ 
Balance = Ingress - Egress 
$$

Using this equation, businesses can accurately determine the net amount available in the account, reflecting the money coming in and going out.

## Creating accounts

The number of accounts in a ledger is unlimited. Accounts also do not need to be created prior being used, as submitting a transaction involving it will automatically make it exist in the ledger.

## Naming accounts

Accounts are identified by their address, which must match `^[a-zA-Z_0-9]+(:[a-zA-Z_0-9]+){0,}$`. It recommended to use colons in addresses to organize them in structured segments, i.e. `payments:001:authorization`, although this does not trigger any particular behavior on the ledger.

```
payments:001:authorizations:001
sales:001:contract
```

## Using Metadata

Accounts can bear metadata, which in a key-value format. This metadata can be used to store any information that is relevant to the account, like a reference to an external system, or a description of the account.

:::tip
Accounts metadata can also be used in Numscript transactions, see [metadata in Numscript](../../numscript/reference/metadata.mdx) for more information.
:::
