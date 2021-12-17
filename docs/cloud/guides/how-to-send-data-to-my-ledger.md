---
title: How to send data to my ledger ?
---
# How to send data to my ledger ?

## What is a ledger ?

## How to get a JWT Token ?
For get a JWT Token, you need a private token. If you don't have one, you can create one in the [My Numary Cloud](https://my.numary.cloud/integrations).
```bash
curl --location --request POST 'https://api.numary.cloud/auth/authenticate/tokens' \
--header 'Content-Type: application/json' \
--data-raw '{
    "strategy": "m2m",
    "token": "YOUR_TOKEN"
}'
```
This API call return your JWT Token. This JWT Token is valid by default for 1 hour.

## Now, send data to your ledger
Please, follow the steps below to send data to your ledger.

Replace :
LEDGER_SLUG = Your Ledger Slug (e.g. my-ledger)
YOUR_JWT_TOKEN = JWT Token you get from the previous step
```shell
curl -X POST \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer YOUR_JWT_TOKEN' \
-d '{
    "postings": [
        {
            "source": "world",
            "destination": "central_bank",
            "asset": "GEM",
            "amount": 100
        },
        {
            "source": "central_bank",
            "destination": "users:001",
            "asset": "GEM",
            "amount": 100
        }
    ],
    "metadata": {
      "description": "Wohoo! a first transaction."
    }
}' https://api.numary.cloud/ledger/LEDGER_SLUG/transactions
```
