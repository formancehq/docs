---
title: Issuing money
---

# Issuing money
One of the first thing you'll do in Numary is to generate money out of thin air. No transaction can happen otherwise, as all accounts start with a zero balance. There is only one way to achieve that, which is through the `world` account.

The built-in `world` account is the only one for which the balance check is disabled, i.e. that is able to send money it doesn't have, i.e. introduce money into the ledger. This has a nice side-effect: the `world` account gives you a single place to see how much money was created.

It is good practice to proxy asset emission with another account, especially when dealing with multi-asset ledgers.
