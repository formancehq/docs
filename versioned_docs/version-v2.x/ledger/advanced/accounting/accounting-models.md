---
sidebar_position: 1
sidebar_label: Definition
---

# Accounting Models

## Definition of Accounting Models

An accounting model represents financial movements within a business. It defines an account, the equation determining an account's balance, and a transaction. It also lays down the rules for handling accounts and transactions, called constraints. This framework helps ensure that financial records are kept accurately and consistently, making tracking and managing financial activities easier.

### Accounts

An account is essentially an asset container. Its primary function is to group assets together based on criteria that best suit the business's needs. This grouping helps organize and manage assets efficiently, making it easier to track financial information and understand the business's financial position. Businesses can maintain a clear and structured financial record by categorizing assets into different accounts, facilitating better decision-making and financial planning.

For example, in a bank, accounts are used to group money by customer, ensuring each customer has their own account. This system allows the bank to keep track of each customer's funds separately, providing clarity and precision in managing financial resources. By assigning individual accounts, banks can offer personalized services and maintain accurate records of each customer's deposits, withdrawals, and other transactions.

In a food delivery app, accounts are used to organize financial activities efficiently. Each restaurant has an account to manage their earnings from orders. Riders have accounts to track their delivery payments. Customers have accounts for their wallets, where they can add and spend money for orders. The platform itself maintains separate accounts for their service fees and taxes. This system ensures that all financial transactions are clearly categorized, making managing and overseeing the app's overall financial operations easier.

In the previous examples, accounts were modeled by just a balance, but they can contain more granular information called components. These components provide a detailed breakdown of the account's activities. For instance, you can record both ingresses and egresses within an account. Ingresses represent money coming into the account, such as deposits or earnings, while egresses represent money leaving the account, such as withdrawals or expenses. This detailed information helps businesses understand not just the overall balance but also the flow of assets in and out of each account, offering a clearer picture of financial health and activity.

### Balance equation

The account balance equation is the method used to combine an account's components to compute its overall balance. When an account has only one component, calculating the balance is straightforward. However, when an account has multiple components, the balance equation can become more complex.

For example, in a situation where an account tracks both ingresses and egresses, the balance equation would involve subtracting the egresses from the ingresses. 

$$ 
Balance = Ingress - Egress 
$$

Using this equation, businesses can accurately determine the net amount available in the account, reflecting the money coming in and going out.

### Transactions

A transaction is a set of modifications applied to a set of accounts at a specific time. Transactions affect only the account components, not the balance, as the balance is derived from these components.

By altering components such as ingresses and egresses from the example above, transactions change the underlying details that will, in turn, update the overall balance of the accounts involved. This structured approach ensures that each financial movement is accurately recorded and reflected in the corresponding account balances through their components.

In a bank, customers can withdraw money from their accounts. This results in a transaction that decreases the customer's account balance. Since this account is composed of only one component, modifying this component is equivalent to manipulating the balance directly. For instance, if a customer withdraws \$100, the transaction reduces the balance by \$100, immediately reflecting this change in the account's overall balance.

In a food delivery app, when a customer pays for an order, a transaction occurs that affects multiple accounts simultaneously. This transaction decreases the customer's wallet balance while increasing the restaurant's earnings account and the rider's earnings account. Additionally, the platform's fees and taxes accounts are also adjusted accordingly. The crucial point is that all these modifications happen at the exact same time and are not partially applied. This ensures that the financial records remain accurate and consistent, reflecting the complete and instantaneous impact of the transaction across all relevant accounts.

### Constraints

The accounting model constraints are a set of rules that define which transactions are valid. These constraints act as guardrails, preventing illegal transactions and ensuring that accounts do not reach invalid states. By enforcing these rules, the accounting model maintains the integrity of the financial system, ensuring that all transactions comply with predefined standards and that accounts are always in a correct and acceptable condition. This helps to prevent errors, fraud, and inconsistencies in financial records, providing a secure and reliable framework for managing financial activities.

As an example, consider an account model using ingress and egress components. We can define the following constraints to maintain the integrity of the system:

- In a transaction, the total amount of modified ingress across the set of accounts must equal the sum of modified egress. This ensures that money is not created out of thin air.
- Accounts cannot have a negative balance, meaning that egress cannot exceed ingress for any account.
- A special account called "world" can have a negative balance. This account is used to introduce money into the system, acting as an exception to the negative balance constraint.

Here are some examples illustrating these constraints in action:

**Case 1:** Adding \$80 to **account 1** ingress is invalid as it violates the first rule. Since there is no corresponding egress in another account, this transaction would improperly create money out of thin air.

**Case 2:** Assuming **account 1** has a balance of \$10. Adding \$20 egress to **account 1** and adding \$20 to **account 2** ingress is invalid as it violates the second rule. This would result in **account 1** having a negative balance, which is not allowed.

**Case 3:** Adding \$20 to the "world" account's egress and adding \$20 to **account 1** ingress is valid because the "world" account is allowed to have a negative balance as per rule 3. This transaction introduces money into the system, complying with the special constraint that allows the "world" account to balance the system by absorbing the negative balance.