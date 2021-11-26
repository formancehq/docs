---
title: Using Numscript
---

# Using Numscript
Numscript is the built-in scripting language of Numary. The main design goal of Numscript is to make it easy & safe to model complex financial transactions.

## Verification
```shell
numary check script.num
```
## Execution
Numscript-based transactions can either be created by using the script endpoint, or by using the command 
```shell
numary exec <ledger-name> script.num
```
