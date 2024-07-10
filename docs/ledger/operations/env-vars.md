---
title: Configuration variables
hide_table_of_contents: true
---

:::info
As an example, DEBUG could either be passed as `ledger serve --debug` or `DEBUG=true ledger serve`.
:::


|Flag                                                   |Env var                                              |Default value    |Description                                                   |
|-                                                      |-                                                    |-                |-                                                             |
|--auth-check-scopes                                    |AUTH_CHECK_SCOPES                                    |false            |CheckScopes                                                   |
|--auth-enabled                                         |AUTH_ENABLED                                         |false            |Enable auth                                                   |
|--auth-issuer                                          |AUTH_ISSUER                                          |                 |Issuer                                                        |
|--auth-read-key-set-max-retries                        |AUTH_READ_KEY_SET_MAX_RETRIES                        |10               |ReadKeySetMaxRetries                                          |
|--auth-service                                         |AUTH_SERVICE                                         |                 |Service                                                       |
|--aws-access-key-id                                    |AWS_ACCESS_KEY_ID                                    |                 |AWS access key id                                             |
|--aws-profile                                          |AWS_PROFILE                                          |                 |AWS profile                                                   |
|--aws-region                                           |AWS_REGION                                           |                 |Specify AWS region                                            |
|--aws-role-arn                                         |AWS_ROLE_ARN                                         |                 |AWS Role ARN                                                  |
|--aws-secret-access-key                                |AWS_SECRET_ACCESS_KEY                                |                 |AWS secret access key                                         |
|--aws-session-token                                    |AWS_SESSION_TOKEN                                    |                 |AWS session token                                             |
|--bind                                                 |BIND                                                 |0.0.0.0:3068     |API bind address                                              |
|--debug                                                |DEBUG                                                |false            |Debug mode                                                    |
|--json-formatting-logger                               |JSON_FORMATTING_LOGGER                               |true             |Json formatting mode for logger                               |
|--otel-metrics                                         |OTEL_METRICS                                         |false            |Enable OpenTelemetry traces support                           |
|--otel-metrics-exporter                                |OTEL_METRICS_EXPORTER                                |stdout           |OpenTelemetry metrics exporter                                |
|--otel-metrics-exporter-otlp-endpoint                  |OTEL_METRICS_EXPORTER_OTLP_ENDPOINT                  |                 |OpenTelemetry traces grpc endpoint                            |
|--otel-metrics-exporter-otlp-insecure                  |OTEL_METRICS_EXPORTER_OTLP_INSECURE                  |false            |OpenTelemetry traces grpc insecure                            |
|--otel-metrics-exporter-otlp-mode                      |OTEL_METRICS_EXPORTER_OTLP_MODE                      |grpc             |OpenTelemetry traces OTLP exporter mode (grpc|http)           |
|--otel-metrics-exporter-push-interval                  |OTEL_METRICS_EXPORTER_PUSH_INTERVAL                  |10s              |OpenTelemetry metrics exporter push interval                  |
|--otel-metrics-runtime                                 |OTEL_METRICS_RUNTIME                                 |false            |Enable OpenTelemetry runtime metrics                          |
|--otel-metrics-runtime-minimum-read-mem-stats-interval |OTEL_METRICS_RUNTIME_MINIMUM_READ_MEM_STATS_INTERVAL |15s              |OpenTelemetry runtime metrics minimum read mem stats interval |
|--otel-resource-attributes                             |OTEL_RESOURCE_ATTRIBUTES                             |[]               |Additional OTLP resource attributes                           |
|--otel-service-name                                    |OTEL_SERVICE_NAME                                    |                 |OpenTelemetry service name                                    |
|--otel-traces                                          |OTEL_TRACES                                          |false            |Enable OpenTelemetry traces support                           |
|--otel-traces-batch                                    |OTEL_TRACES_BATCH                                    |false            |Use OpenTelemetry batching                                    |
|--otel-traces-exporter                                 |OTEL_TRACES_EXPORTER                                 |stdout           |OpenTelemetry traces exporter                                 |
|--otel-traces-exporter-jaeger-endpoint                 |OTEL_TRACES_EXPORTER_JAEGER_ENDPOINT                 |                 |OpenTelemetry traces Jaeger exporter endpoint                 |
|--otel-traces-exporter-jaeger-password                 |OTEL_TRACES_EXPORTER_JAEGER_PASSWORD                 |                 |OpenTelemetry traces Jaeger exporter password                 |
|--otel-traces-exporter-jaeger-user                     |OTEL_TRACES_EXPORTER_JAEGER_USER                     |                 |OpenTelemetry traces Jaeger exporter user                     |
|--otel-traces-exporter-otlp-endpoint                   |OTEL_TRACES_EXPORTER_OTLP_ENDPOINT                   |                 |OpenTelemetry traces grpc endpoint                            |
|--otel-traces-exporter-otlp-insecure                   |OTEL_TRACES_EXPORTER_OTLP_INSECURE                   |false            |OpenTelemetry traces grpc insecure                            |
|--otel-traces-exporter-otlp-mode                       |OTEL_TRACES_EXPORTER_OTLP_MODE                       |grpc             |OpenTelemetry traces OTLP exporter mode (grpc|http)           |
|--postgres-aws-enable-iam                              |POSTGRES_AWS_ENABLE_IAM                              |false            |Enable AWS IAM authentication                                 |
|--postgres-conn-max-idle-time                          |POSTGRES_CONN_MAX_IDLE_TIME                          |1m0s             |Max Idle time for connections                                 |
|--postgres-max-idle-conns                              |POSTGRES_MAX_IDLE_CONNS                              |0                |Max Idle connections                                          |
|--postgres-max-open-conns                              |POSTGRES_MAX_OPEN_CONNS                              |20               |Max opened connections                                        |
|--postgres-uri                                         |POSTGRES_URI                                         |                 |Postgres URI                                                  |
|--publisher-circuit-breaker-enabled                    |PUBLISHER_CIRCUIT_BREAKER_ENABLED                    |false            |Enable circuit breaker for publisher                          |
|--publisher-circuit-breaker-list-storage-limit         |PUBLISHER_CIRCUIT_BREAKER_LIST_STORAGE_LIMIT         |100              |Circuit breaker list storage limit                            |
|--publisher-circuit-breaker-open-interval-duration     |PUBLISHER_CIRCUIT_BREAKER_OPEN_INTERVAL_DURATION     |5s               |Circuit breaker open interval duration                        |
|--publisher-circuit-breaker-schema                     |PUBLISHER_CIRCUIT_BREAKER_SCHEMA                     |_system          |Circuit breaker schema                                        |
|--publisher-http-enabled                               |PUBLISHER_HTTP_ENABLED                               |false            |Sent write event to http endpoint                             |
|--publisher-kafka-broker                               |PUBLISHER_KAFKA_BROKER                               |[localhost:9092] |Kafka address is kafka enabled                                |
|--publisher-kafka-enabled                              |PUBLISHER_KAFKA_ENABLED                              |false            |Publish write events to kafka                                 |
|--publisher-kafka-sasl-enabled                         |PUBLISHER_KAFKA_SASL_ENABLED                         |false            |Enable SASL authentication on kafka publisher                 |
|--publisher-kafka-sasl-iam-enabled                     |PUBLISHER_KAFKA_SASL_IAM_ENABLED                     |false            |Enable IAM authentication on kafka publisher                  |
|--publisher-kafka-sasl-mechanism                       |PUBLISHER_KAFKA_SASL_MECHANISM                       |                 |SASL authentication mechanism                                 |
|--publisher-kafka-sasl-password                        |PUBLISHER_KAFKA_SASL_PASSWORD                        |                 |SASL password                                                 |
|--publisher-kafka-sasl-scram-sha-size                  |PUBLISHER_KAFKA_SASL_SCRAM_SHA_SIZE                  |512              |SASL SCRAM SHA size                                           |
|--publisher-kafka-sasl-session-name                    |PUBLISHER_KAFKA_SASL_SESSION_NAME                    |                 |IAM session name                                              |
|--publisher-kafka-sasl-username                        |PUBLISHER_KAFKA_SASL_USERNAME                        |                 |SASL username                                                 |
|--publisher-kafka-tls-enabled                          |PUBLISHER_KAFKA_TLS_ENABLED                          |false            |Enable TLS to connect on kafka                                |
|--publisher-nats-auto-provision                        |PUBLISHER_NATS_AUTO_PROVISION                        |true             |Auto create streams                                           |
|--publisher-nats-client-id                             |PUBLISHER_NATS_CLIENT_ID                             |                 |Nats client ID                                                |
|--publisher-nats-enabled                               |PUBLISHER_NATS_ENABLED                               |false            |Publish write events to nats                                  |
|--publisher-nats-max-reconnect                         |PUBLISHER_NATS_MAX_RECONNECT                         |-1               |Nats: set the maximum number of reconnect attempts.           |
|--publisher-nats-reconnect-wait                        |PUBLISHER_NATS_RECONNECT_WAIT                        |2s               |Nats: the wait time between reconnect attempts.               |
|--publisher-nats-url                                   |PUBLISHER_NATS_URL                                   |                 |Nats url                                                      |
|--publisher-topic-mapping                              |PUBLISHER_TOPIC_MAPPING                              |[]               |Define mapping between internal event types and topics        |