---
title: Authentication
---
# Getting started with Cloud

## Authentication

To obtain a JWT Token, you need to create an API token first, which you can create on the [Formance Cloud Dashboard](https://my.numary.cloud/integrations).

```bash
curl --location --request POST 'https://api.numary.cloud/auth/authenticate/tokens' \
--header 'Content-Type: application/json' \
--data-raw '{
    "strategy": "m2m",
    "token": "YOUR_API_TOKEN"
}'
```
This API call will return a JWT token, which is valid for 1 hour by default.

## Sending data

Replacing:  
`LEDGER_SLUG` with your ledger slug, e.g. `my-ledger-a1871e`  
`YOUR_JWT_TOKEN` with the JWT token obtained from the previous step

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
