---
title: Configuration Variables
---
# Configuration Variables

:::info
When using environment vars, the var name must be prefixed with `NUMARY_`. As an example, DEBUG could either be passed as `numary server start --debug` or `NUMARY_DEBUG=true numary server start`.
:::

 |Flag                                   |Env var                              |Default value                    |Description                                            |
 |-                                      |-                                    |-                                |-                                                      |
 |--auth-basic-credentials               |NUMARY_AUTH_BASIC_CREDENTIALS               |[]                               |HTTP basic auth credentials (`<username>:<password>`)    |
 |--auth-basic-enabled                   |NUMARY_AUTH_BASIC_ENABLED                   |false                            |Enable basic auth                                      |
 |--auth-bearer-audience                 |NUMARY_AUTH_BEARER_AUDIENCE                 |[]                               |Allowed audiences                                      |
 |--auth-bearer-audiences-wildcard       |NUMARY_AUTH_BEARER_AUDIENCES_WILDCARD       |false                            |Don't check audience                                   |
 |--auth-bearer-enabled                  |NUMARY_AUTH_BEARER_ENABLED                  |false                            |Enable bearer auth                                     |
 |--auth-bearer-introspect-url           |NUMARY_AUTH_BEARER_INTROSPECT_URL           |                                 |OAuth2 introspect URL                                  |
 |--debug                                |NUMARY_DEBUG                                |false                            |Debug mode                                             |
 |--lock-strategy                        |NUMARY_LOCK_STRATEGY                        |memory                           |Lock strategy (memory, none, redis)                    |
 |--lock-strategy-redis-duration         |NUMARY_LOCK_STRATEGY_REDIS_DURATION         |1m0s                             |Lock duration                                          |
 |--lock-strategy-redis-retry            |NUMARY_LOCK_STRATEGY_REDIS_RETRY            |1s                               |Retry lock period                                      |
 |--lock-strategy-redis-tls-enabled      |NUMARY_LOCK_STRATEGY_REDIS_TLS_ENABLED      |false                            |Use tls on redis                                       |
 |--lock-strategy-redis-tls-insecure     |NUMARY_LOCK_STRATEGY_REDIS_TLS_INSECURE     |false                            |Whether redis is trusted or not                        |
 |--lock-strategy-redis-url              |NUMARY_LOCK_STRATEGY_REDIS_URL              |                                 |Redis url when using redis locking strategy            |
 |--otel-metrics                         |NUMARY_OTEL_METRICS                         |false                            |Enable OpenTelemetry metrics support                   |
 |--otel-metrics-exporter                |NUMARY_OTEL_METRICS_EXPORTER                |stdout                           |OpenTelemetry metrics exporter                         |
 |--otel-metrics-exporter-otlp-endpoint  |NUMARY_OTEL_METRICS_EXPORTER_OTLP_ENDPOINT  |                                 |OpenTelemetry metrics grpc endpoint                    |
 |--otel-metrics-exporter-otlp-insecure  |NUMARY_OTEL_METRICS_EXPORTER_OTLP_INSECURE  |false                            |OpenTelemetry metrics grpc insecure                    |
 |--otel-metrics-exporter-otlp-mode      |NUMARY_OTEL_METRICS_EXPORTER_OTLP_MODE      |grpc                             |OpenTelemetry metrics OTLP exporter mode (grpc|http)   |
 |--otel-traces                          |NUMARY_OTEL_TRACES                          |false                            |Enable OpenTelemetry traces support                    |
 |--otel-traces-batch                    |NUMARY_OTEL_TRACES_BATCH                    |false                            |Use OpenTelemetry batching                             |
 |--otel-traces-exporter                 |NUMARY_OTEL_TRACES_EXPORTER                 |stdout                           |OpenTelemetry traces exporter                          |
 |--otel-traces-exporter-jaeger-endpoint |NUMARY_OTEL_TRACES_EXPORTER_JAEGER_ENDPOINT |                                 |OpenTelemetry traces Jaeger exporter endpoint          |
 |--otel-traces-exporter-jaeger-password |NUMARY_OTEL_TRACES_EXPORTER_JAEGER_PASSWORD |                                 |OpenTelemetry traces Jaeger exporter password          |
 |--otel-traces-exporter-jaeger-user     |NUMARY_OTEL_TRACES_EXPORTER_JAEGER_USER     |                                 |OpenTelemetry traces Jaeger exporter user              |
 |--otel-traces-exporter-otlp-endpoint   |NUMARY_OTEL_TRACES_EXPORTER_OTLP_ENDPOINT   |                                 |OpenTelemetry traces grpc endpoint                     |
 |--otel-traces-exporter-otlp-insecure   |NUMARY_OTEL_TRACES_EXPORTER_OTLP_INSECURE   |false                            |OpenTelemetry traces grpc insecure                     |
 |--otel-traces-exporter-otlp-mode       |NUMARY_OTEL_TRACES_EXPORTER_OTLP_MODE       |grpc                             |OpenTelemetry traces OTLP exporter mode (grpc|http)    |
 |--publisher-http-enabled               |NUMARY_PUBLISHER_HTTP_ENABLED               |false                            |Sent write event to http endpoint                      |
 |--publisher-kafka-broker               |NUMARY_PUBLISHER_KAFKA_BROKER               |[]                               |Kafka address is kafka enabled                         |
 |--publisher-kafka-enabled              |NUMARY_PUBLISHER_KAFKA_ENABLED              |false                            |Publish write events to kafka                          |
 |--publisher-kafka-sasl-enabled         |NUMARY_PUBLISHER_KAFKA_SASL_ENABLED         |false                            |Enable SASL authentication on kafka publisher          |
 |--publisher-kafka-sasl-mechanism       |NUMARY_PUBLISHER_KAFKA_SASL_MECHANISM       |                                 |SASL authentication mechanism                          |
 |--publisher-kafka-sasl-password        |NUMARY_PUBLISHER_KAFKA_SASL_PASSWORD        |                                 |SASL password                                          |
 |--publisher-kafka-sasl-scram-sha-size  |NUMARY_PUBLISHER_KAFKA_SASL_SCRAM_SHA_SIZE  |512                              |SASL SCRAM SHA size                                    |
 |--publisher-kafka-sasl-username        |NUMARY_PUBLISHER_KAFKA_SASL_USERNAME        |                                 |SASL username                                          |
 |--publisher-kafka-tls-enabled          |NUMARY_PUBLISHER_KAFKA_TLS_ENABLED          |false                            |Enable TLS to connect on kafka                         |
 |--publisher-topic-mapping              |NUMARY_PUBLISHER_TOPIC_MAPPING              |[]                               |Define mapping between internal event types and topics |
 |--segment-application-id               |NUMARY_SEGMENT_APPLICATION_ID               |                                 |Segment application id                                 |
 |--segment-enabled                      |NUMARY_SEGMENT_ENABLED                      |true                             |Is segment enabled                                     |
 |--segment-heartbeat-interval           |NUMARY_SEGMENT_HEARTBEAT_INTERVAL           |24h0m0s                          |Segment heartbeat interval                             |
 |--segment-write-key                    |NUMARY_SEGMENT_WRITE_KEY                    |lAVEcNA5tKkhkQGp2CvTBSsbGqFsbCIF |Segment write key                                      |
 |--server.http.basic_auth               |NUMARY_SERVER_HTTP_BASIC_AUTH               |                                 |Http basic auth                                        |
 |--server.http.bind_address             |NUMARY_SERVER_HTTP_BIND_ADDRESS             |localhost:3068                   |API bind address                                       |
 |--storage.cache                        |NUMARY_STORAGE_CACHE                        |true                             |Storage cache                                          |
 |--storage.dir                          |NUMARY_STORAGE_DIR                          |/Users/clement/.numary/data      |Storage directory (for sqlite)                         |
 |--storage.driver                       |NUMARY_STORAGE_DRIVER                       |sqlite                           |Storage driver                                         |
 |--storage.postgres.conn_string         |NUMARY_STORAGE_POSTGRES_CONN_STRING         |postgresql://localhost/postgres  |Postgre connection string                              |
 |--storage.sqlite.db_name               |NUMARY_STORAGE_SQLITE_DB_NAME               |numary                           |SQLite database name                                   |
 |--ui.http.bind_address                 |NUMARY_UI_HTTP_BIND_ADDRESS                 |localhost:3068                   |UI bind address                                        |
