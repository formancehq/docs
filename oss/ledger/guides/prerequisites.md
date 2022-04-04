---
title: Prerequisites
description: Everything you need to get started with these guides.
---

import { NumscriptBlock } from 'react-numscript-codeblock';

# Do this first: Prerequisites for using the guides

The guides in this section all involve the movement of money to and from various accounts. In the real world, money should only enter your ledger from the `@world` account when real money moves into real accounts that you are tracking. However, to let you run demonstrations in the guides, we need to seed the example accounts with funds.

**This is not realistic** and you should as a general rule never arbitrarily create money without a corresponding movement of money in the real world!

First, create a file called `seed.num` with the following contents:

<NumscriptBlock script={`send [COIN 6000] (
  source = @world
  destination = {
    1/6 to @centralbank
    1/6 to {
      50% to @users:donnameagle
      remaining to @users:donnameagle:chest
    }
    1/6 to @users:tomhaverford
    1/6 to @users:leslieknope
    1/6 to {
      50/1000 to @users:andydwyer
      remaining to @users:andydwyer:chest
    }
    remaining to @users:annperkins
  }
)`}></NumscriptBlock>

At this point, don't worry about understanding what this Numscript does, it's only to get the Dunshire ledger set up for the following guides.

Then run it with

```shell
numary exec dunshire seed.num
```

This will place 1000 coins in all the accounts we will use in these guides. You shouldn't need to, but you can always run this script as many times as necessary to ensure that all accounts are topped up with funds.

## VSCode extension

A [Numscript VSCode extension](https://marketplace.visualstudio.com/items?itemName=numary.numscript) is available for syntax highlighting.

## Resetting the Dunshire ledger

If you find that you want a clean slate to start from, you can reset the Dunshire ledger in its entirety. If you followed the [Hello World tutorial](/oss/ledger/get-started/hello-world/), then Numary Ledger is using the default SQLite storage method. Thus you can delete the Dunshire ledger by deleting the corresponding SQLite file, which is stored in `~/.numary/data/numary_dunshire.db`.