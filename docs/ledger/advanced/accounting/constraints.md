---
sidebar_position: 1
sidebar_label: Constraints
---

# Accounting Model Constraints

The accounting model constraints are a set of rules that define which transactions are valid. These constraints act as guardrails, preventing illegal transactions and ensuring that accounts do not reach invalid states. By enforcing these rules, the accounting model maintains the integrity of the financial system, ensuring that all transactions comply with predefined standards and that accounts are always in a correct and acceptable condition. This helps to prevent errors, fraud, and inconsistencies in financial records, providing a secure and reliable framework for managing financial activities.

As an example, consider an account model using ingress and egress components. We can define the following constraints to maintain the integrity of the system:

- In a transaction, the total amount of modified ingress across the set of accounts must equal the sum of modified egress. This ensures that money is not created out of thin air.
- Accounts cannot have a negative balance, meaning that egress cannot exceed ingress for any account.
- A special account called "world" can have a negative balance. This account is used to introduce money into the system, acting as an exception to the negative balance constraint.

Here are some examples illustrating these constraints in action:

**Case 1:** Adding \$80 to **account 1** ingress is invalid as it violates the first rule. Since there is no corresponding egress in another account, this transaction would improperly create money out of thin air.

**Case 2:** Assuming **account 1** has a balance of \$10. Adding \$20 egress to **account 1** and adding \$20 to **account 2** ingress is invalid as it violates the second rule. This would result in **account 1** having a negative balance, which is not allowed.

**Case 3:** Adding \$20 to the "world" account's egress and adding \$20 to **account 1** ingress is valid because the "world" account is allowed to have a negative balance as per rule 3. This transaction introduces money into the system, complying with the special constraint that allows the "world" account to balance the system by absorbing the negative balance.