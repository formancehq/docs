---
title: Variables
---
# Variables
Hardcoded values are great for quick prototyping and iteration, but chances are that you will at some point need to inject some variables into your Numscript files.

All core types can be defined as variables and used in the script body:
```numscript
vars {
  monetary $price
  account $payment
  portion $commission
}

send $price (
  source = @world
  destination = {
    $commission to @platform
    remaining to $payment
  }
)
```
Injections of variables can be done at execution; the [/{ledger}/script](ref:ledgerscript-1) endpoint providing a `vars` parameter to inject such variables
```json
{
  "vars": {
    "price": {
      "amount": 100,
      "asset": "USD/2"
  	},
   	"payment": "payments:108391JJA",
    "commission": "15/100"
	}
}
```
