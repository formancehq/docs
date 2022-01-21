---
title: Storages considerations
---
# Storages considerations
Numary abstracts storage behind a single interface, and storage plugins are responsible for implementing them in the most efficient way possible.

## SQLite

SQLite is the default storage shipped with Numary. It is ideal for testing and single-node installations. It will use the data directory defined in config, which defaults to `$HOME/.numary/data`.

## Postgres

Postgres compatibility is shipped with Numary out of the box as well. It is not the default storage and can be used by updating the configuration variables `storage.driver` and `storage.postgres.conn_string`. Environments variables or file can be used.

```shell
NUMARY_STORAGE_DRIVER=postgres \
NUMARY_STORAGE_POSTGRES_CONN_STRING=postgresql://localhost/dbname \
numary server start
```

or use config file : 
```yaml
storage:
  driver: postgres
  postgres:
    conn_string: postgresql://localhost/postgres
```
