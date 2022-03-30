---
title: Prerequisites
---

import { NumscriptBlock } from 'react-numscript-codeblock';

# Do this first: Prerequisites for using the guides

The guides in this section all involve the movement of money to and from various accounts. In the real world, money should only enter your ledger from the `@world` account when real money moves into real accounts that you are tracking. However, to let you run demonstrations in the guides, we need to seed the example accounts with funds.

**This is not realistic** and you should as a general rule never arbitrarily create money without a corresponding movement of money in the real world!

First, create a file called `seed.num` with the following contents:

<NumscriptBlock script={`send [COIN 5000] (
  source = @world
  destination = {
    1/5 to @centralbank
    1/5 to @users:donnameagle
    1/5 to @users:tomhaverford
    1/5 to @users:leslieknope
    remaining to @users:annperkins
  }
)`}></NumscriptBlock>

Then run it with

```shell
numary exec dunshire seed.num
```

This will place 1000 coins in all the accounts we will use in these guides. You shouldn't need to, but you can always run this script as many times as necessary to ensure that all accounts are topped up with funds.

## Resetting the Dunshire ledger

If you find that you want a clean slate to start from, you can reset the Dunshire ledger in its entirety. If you followed the [Hello World tutorial](/oss/ledger/get-started/hell-world/), then Numary Ledger is using the default SQLite storage method. Thus you can delete the Dunshire ledger by deleting the corresponding SQLite file, which is stored in `~/.numary/data/numary_dunshire.db`.