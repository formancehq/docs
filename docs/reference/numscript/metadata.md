---
title: Metadata
---
# Metadata

Account [metadata](ref:post_-ledger-accounts-reference-metadata-1) can be obtained in Numscript to be used in the script body.

In the below example, we fetch the "value" meta from the coupon account:
```numscript
vars {
  account  $coupon
  account  $wallet
  monetary $value = meta($coupon, "value")
}

send $value (
  source = $coupon
  destination = $wallet
)
```
