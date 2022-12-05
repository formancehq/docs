---
title: Publishing to Kafka
---

# Publishing to Kafka

An integration with Kafka is available out of the box since 1.3.x. It allows you to push ledger events to a kafka broker of your choice, bringing easy and reliable extensibility. It can be enabled by setting the [configuration variables](/ledger/operations/env-vars) PUBLISHER_KAFKA_ENABLED, PUBLISHER_KAFKA_BROKER and PUBLISHER_TOPIC_MAPPING.

Other [variables](/ledger/operations/env-vars) are available for further authentication and configuration.

The following events types are available:

* COMMITTED_TRANSACTIONS
* SAVED_METADATA
* UPDATED_MAPPING
* REVERTED_TRANSACTION

## Example

```shell
# Publishing COMMITTED_TRANSACTIONS events to the default topic
numary server start \
  --publisher-kafka-enabled \
  --publisher-kafka-broker="localhost:9092" \
  --publisher-topic-mapping='COMMITTED_TRANSACTIONS:default'

# Publishing all events to the default topic
numary server start \
  --publisher-kafka-enabled \
  --publisher-kafka-broker="localhost:9092" \
  --publisher-topic-mapping='*:default'
```

On the receiving hand, the http body sent will be formatted as per [these structs](https://github.com/formancehq/ledger/blob/main/pkg/bus/message.go#L8):

```json
{
  "date": "2022-05-12T14:31:07.808419+02:00",
  "type": "COMMITTED_TRANSACTIONS",
  "payload": {
    "transactions": [
      {
        "postings": [
          {
            "source": "world",
            "destination": "central_bank",
            "amount": 100,
            "asset": "GEM"
          }
        ],
        "reference": "",
        "metadata": {
          "description": "A testing transaction."
        },
        "txid": 0,
        "timestamp": "2022-05-12T12:31:07Z"
      }
    ],
    "volumes": {
      "central_bank": {
        "GEM": {
          "input": 100,
          "output": 0
        }
      },
      "world": {
        "GEM": {
          "input": 0,
          "output": 100
        }
      }
    }
  },
  "ledger": "example-ledger-1"
}
```