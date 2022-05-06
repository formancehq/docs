---
title: Environment Variables
---
# Environment Variables


|Flag                                   |Env var                              |Default value                     |Description                                            |
|-                                      |-                                    |-                                 |-                                                      |
|--debug                                |DEBUG                                |false                             |Debug mode                                             |
|--ledgers                              |LEDGERS                              |[quickstart]                      |Ledgers                                                |
|--lock-strategy                        |LOCK_STRATEGY                        |memory                            |Lock strategy (memory, none, redis)                    |
|--lock-strategy-redis-duration         |LOCK_STRATEGY_REDIS_DURATION         |1m0s                              |Lock duration                                          |
|--lock-strategy-redis-retry            |LOCK_STRATEGY_REDIS_RETRY            |1s                                |Retry lock period                                      |
|--lock-strategy-redis-tls-enabled      |LOCK_STRATEGY_REDIS_TLS_ENABLED      |false                             |Use tls on redis                                       |
|--lock-strategy-redis-tls-insecure     |LOCK_STRATEGY_REDIS_TLS_INSECURE     |false                             |Whether redis is trusted or not                        |
|--lock-strategy-redis-url              |LOCK_STRATEGY_REDIS_URL              |                                  |Redis url when using redis locking strategy            |
|--otel-metrics                         |OTEL_METRICS                         |false                             |Enable OpenTelemetry metrics support                   |
|--otel-metrics-exporter                |OTEL_METRICS_EXPORTER                |stdout                            |OpenTelemetry metrics exporter                         |
|--otel-metrics-exporter-otlp-endpoint  |OTEL_METRICS_EXPORTER_OTLP_ENDPOINT  |                                  |OpenTelemetry metrics grpc endpoint                    |
|--otel-metrics-exporter-otlp-insecure  |OTEL_METRICS_EXPORTER_OTLP_INSECURE  |false                             |OpenTelemetry metrics grpc insecure                    |
|--otel-metrics-exporter-otlp-mode      |OTEL_METRICS_EXPORTER_OTLP_MODE      |grpc                              |OpenTelemetry metrics OTLP exporter mode (grpc|http)   |
|--otel-traces                          |OTEL_TRACES                          |false                             |Enable OpenTelemetry traces support                    |
|--otel-traces-batch                    |OTEL_TRACES_BATCH                    |false                             |Use OpenTelemetry batching                             |
|--otel-traces-exporter                 |OTEL_TRACES_EXPORTER                 |stdout                            |OpenTelemetry traces exporter                          |
|--otel-traces-exporter-jaeger-endpoint |OTEL_TRACES_EXPORTER_JAEGER_ENDPOINT |                                  |OpenTelemetry traces Jaeger exporter endpoint          |
|--otel-traces-exporter-jaeger-password |OTEL_TRACES_EXPORTER_JAEGER_PASSWORD |                                  |OpenTelemetry traces Jaeger exporter password          |
|--otel-traces-exporter-jaeger-user     |OTEL_TRACES_EXPORTER_JAEGER_USER     |                                  |OpenTelemetry traces Jaeger exporter user              |
|--otel-traces-exporter-otlp-endpoint   |OTEL_TRACES_EXPORTER_OTLP_ENDPOINT   |                                  |OpenTelemetry traces grpc endpoint                     |
|--otel-traces-exporter-otlp-insecure   |OTEL_TRACES_EXPORTER_OTLP_INSECURE   |false                             |OpenTelemetry traces grpc insecure                     |
|--otel-traces-exporter-otlp-mode       |OTEL_TRACES_EXPORTER_OTLP_MODE       |grpc                              |OpenTelemetry traces OTLP exporter mode (grpc|http)    |
|--persist-config                       |PERSIST_CONFIG                       |true                              |Persist config on disk                                 |
|--publisher-http-enabled               |PUBLISHER_HTTP_ENABLED               |false                             |Sent write event to http endpoint                      |
|--publisher-kafka-broker               |PUBLISHER_KAFKA_BROKER               |[]                                |Kafka address is kafka enabled                         |
|--publisher-kafka-enabled              |PUBLISHER_KAFKA_ENABLED              |false                             |Publish write events to kafka                          |
|--publisher-topic-mapping              |PUBLISHER_TOPIC_MAPPING              |[]                                |Define mapping between internal event types and topics |
|--server.http.basic_auth               |SERVER_HTTP_BASIC_AUTH               |                                  |Http basic auth                                        |
|--server.http.bind_address             |SERVER_HTTP_BIND_ADDRESS             |localhost:3068                    |API bind address                                       |
|--storage.cache                        |STORAGE_CACHE                        |true                              |Storage cache                                          |
|--storage.dir                          |STORAGE_DIR                          |/Users/geoffreyragot/.numary/data |Storage directory (for sqlite)                         |
|--storage.driver                       |STORAGE_DRIVER                       |sqlite                            |Storage driver                                         |
|--storage.postgres.conn_string         |STORAGE_POSTGRES_CONN_STRING         |postgresql://localhost/postgres   |Postgre connection string                              |
|--storage.sqlite.db_name               |STORAGE_SQLITE_DB_NAME               |numary                            |SQLite database name                                   |
|--ui.http.bind_address                 |UI_HTTP_BIND_ADDRESS                 |localhost:3068                    |UI bind address                                        |