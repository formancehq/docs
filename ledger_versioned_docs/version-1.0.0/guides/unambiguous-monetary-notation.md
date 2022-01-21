---
title: Unambiguous Monetary Notation
---

# Unambiguous Monetary Notation
While you can use any [A-Z]{1,16} asset in your transactions, it is strongly encouraged to use the Unambiguous Monetary Notation if you're dealing with ISO 4217 currencies.

## Specification
An Unambiguous Monetary Notation value is represented as:

```
[ASSET/SCALE AMOUNT]
```

Where SCALE represent the negative power of ten to multiply the amount with to obtain the decimal value in the asset, and AMOUNT is an unsigned integer. As an example,

`[USD/2 30]` is equivalent to `USD 30*1E-2`, i.e `USD 0.30`, i.e `30 USD` cents.

For values where the amount already represents the amount of said asset, a scale of zero should not be represented, e.g. `[JPY 100]`.

## Rationale
The reason behind this recommendation that using `USD` in itself is inherently ambiguous. If you see
```
USD 100
```

It is supposed to represent $100.00 or $1.00? You can't tell without more context. To get things worse, this interpretation is not standardized across payments services providers - some will use strings and happily parse both "100", and "100.30".

By explicitly adding the scale in values, Unambiguous Monetary Notation makes it really hard for amounts to be misinterpreted.
