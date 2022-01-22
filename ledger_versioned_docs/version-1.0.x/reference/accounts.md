---
title: Accounts
---
# Accounts
Accounts are containers for assets. They can send and receive assets using transactions, the sum of which will determine their balances.

The number of accounts in a ledger is unlimited. Accounts don't have to represent a "real" account in your bank, they can represent anything that has meaning to you. Once you grasp the idiomatic Numary way of building financial applications, you'll start using accounts to represent abstract concepts in your business logic, like a sale, a contract or a payment.

Accounts do not need to be created prior being used, submitting a transaction involving it will automatically make it exist in the ledger.

Accounts are identified by their address, which must match `^[a-zA-Z_0-9]+(:[a-zA-Z_0-9]+){0,}$`. It is typical to use colons in addresses to organize them in segments, i.e. `payments:001:authorization`, although this does not trigger any particular behavior on the ledger.
