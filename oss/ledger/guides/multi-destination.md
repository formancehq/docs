---
title: Transactions with multiple destinations
---

import { NumscriptBlock } from 'react-numscript-codeblock';

# Transactions with multiple destinations

Sometimes you need to split a payment across multiple destinations. For example:

* You charged VAT on an order, and so you need to split off a percentage of a payment into a dedicated VAT account.
* You have a marketplace, and a customer has made a single purchase of items from multiple vendors.
* Your game players need to split the loot from a group raid.

## Basic transaction splitting

Since we're in the game land of Dunshire, let's consider that last case. The ledgerman wants a map of a coastal region, and is willing to pay 75 coins to someone to get it done. A group of two surveyors working together rises to the task, and creates that map. Now, the ledgerman who gave them the mission wants to split the reward between them.

We can describe the transaction using Numscript. Create a file called `split.num` with:

<NumscriptBlock script={`send [COIN 75] (
  source = @centralbank
  destination = {
    50% to @users:leslieknope
    remaining to @users:annperkins
  }
)`}></NumscriptBlock>

And run it with

```shell
numary exec dunshire split.num
```

:::caution
Are you seeing
```
FATA[0000] account had insufficient funds
```
in your output? Make sure that the `@centralbank` account has enough funds. [Read how to introduce money into the ledger](/oss/ledger/get-started/hello-world/introducing-money).
:::

Once you've run that transaction succesfully, let's have a look at [`leslieknope`'s balance'](https://control.numary.com/accounts/users:leslieknope).


![`leslieknope` gets 38 and `annperkins` gets 37 coin](multi-destination-1.png)

### What's going on here?

First, we're sending half of the 75 coin payment to `leslieknope`. Notice that 75, being an odd number, doesn't split evenly in half. Numscript is smart about this, and rounds amounts in a way that avoids rounding errors. Because `leslieknope` is listed first, they will get the coin that remains after evenly subdividing: They will receive 38 coin.

:::info
[Floating point numbers are too imprecise for finance](https://www.youtube.com/watch?v=yZjCQ3T5yXo). Numscript avoids this problem by only using integer math for dividing payments up. The reference docs have [more detail on about Numscript's rounding algorithm](/oss/ledger/reference/numscript/rounding/).
:::

Second, we're avoiding mistakes in our own calculations by telling Numscript to send whatever remains to `annperkins`, after `leslieknope` gets their share, by using the `remaining` keyword. Since `leslieknope` received 38 coin, that leaves 37 coin to distribute to `annperkins`.

## Nested transaction splitting.

Let's take the previous scenario, and add a twist. Let's suppose the ledgerman needed to withhold taxes from the payment—Dunshire imposes a flat 15% sales tax for goods and services. We could modify `split.num` to reflect a three-way transaction:

<NumscriptBlock script={`send [COIN 75] (
  source = @centralbank
  destination = {
    15% to @salestax
    43% to @users:leslieknope
    remaining to @users:annperkins
  }
)`}></NumscriptBlock>

([Don't forget to top up the `@centralbank` account](/oss/ledger/get-started/hello-world/introducing-money) before running this script again!)

But there is a problem: Scripting the transaction this way requires us to manually do the math to figure out that `leslieknope` should get 42.5% of the transaction.

There's a better way: Nested destinations. Using nested destinations allows us to be clearer about our intent, and leaves much of the math off to Numscript to sort out:

<NumscriptBlock script={`send [COIN 75] (
  source = @centralbank
  destination = {
    15% to @salestax
    remaining to {
        50% to @users:leslieknope
        remaining to @users:annperkins
    }
  }
)`}></NumscriptBlock>

Run this script, and then [look at `leslieknope`'s balance](https://control.numary.com/accounts/users:leslieknope).

![`leslieknope` gets 38 and `annperkins` gets 37 coin](multi-destination-2.png)

You can see that Numscript has worked out all of necessary calculations so that the entire payment is allocated correctly to all destinations, with no remainder.

## Going further

Numscript offers several different mechanisms for indicating how a transaction should be split among different destinations, this guide has just been a small taste of what's possible.

:::info
Want to learn more about all the different ways to split a transaction? [The reference docs](/oss/ledger/reference/numscript/destinations) have you covered!
:::