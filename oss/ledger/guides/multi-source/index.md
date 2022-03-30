---
title: Transactions with multiple sources
description: Sometimes you need to split a payment across multiple sources. Learn how to do this with Numscript.
---

import { NumscriptBlock } from 'react-numscript-codeblock';
import Prerequisites from '/oss/ledger/partials/guides/_prerequisites.mdx';

<Prerequisites />

# Transactions from multiple sources

Sometimes you need to split a payment from multiple sources. For example:

* At times there might not be enough money in an account you want to pay from. You want to specify a backup account.
* You need to spread costs across multiple accounts. For example, you might have a special marketing fund that partially covers certain payments.
* Your game players want to go in together on a shared purchase.

## Basic transaction splitting

Since we're in the game land of Dunshire, let's consider that last case. Two users `donnameagle` and `tomhaverford` have decided [to treat themselves](https://www.youtube.com/watch?v=gSjM5B3QNlw) to a pony. The pony costs 75 coins, and they want to split the price evenly between themselves.

We can describe the transaction using Numscript. Create a file called `treat.num` with:

<NumscriptBlock script={`send [COIN 75] (
  source = {
    50% from @users:donnameagle
    remaining from @users:tomhaverford
  }
  destination = @centralbank
)`}></NumscriptBlock>

And run it with

```shell
numary exec dunshire treat.num
```

<!-- TODO this is crap. Need a better way to seed the accounts! -->
:::caution
Are you seeing
```
FATA[0000] account had insufficient funds
```
in your output? Make sure that the `@users:donnameagle` and `@users:tomhaverford` accounts have enough funds before you run this example. You should deposit money into their accounts from the special `@world` account first. [Read how to introduce money into the ledger](/oss/ledger/get-started/hello-world/introducing-money).
:::

### What's going on here?

First, we're taking half of the 75 coin payment from `donnameagle`. Notice that 75, being an odd number, doesn't split evenly in half. Numscript is smart about this, and rounds amounts in a way that avoids rounding errors. Because `donnameagle` is listed first, they will pay the coin that remains after evenly subdividing: They will pay 38 coin.

:::info
[Floating point numbers are too imprecise for finance](https://www.youtube.com/watch?v=yZjCQ3T5yXo). Numscript avoids this problem by only using integer math for dividing payments up. The reference docs have [more detail on about Numscript's rounding algorithm](/oss/ledger/reference/numscript/rounding/).
:::

Second, we're avoiding mistakes in our own calculations by telling Numscript to pay whatever remains from `tomhaverford`, after `donnameagle` pays their share, by using the `remaining` keyword. Since `donnameagle` paid 38 coin, that leaves 37 coin for `tomhaverford` to pay.

## Specifying backup accounts

## Nesting