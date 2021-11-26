---
title: Authentication
---
# Authentication
A Basic HTTP authentication is available by using the server.http.basic_auth parameter in configuration.
```shell
NUMARY_SERVER_HTTP_BASIC_AUTH=foo:bar \
numary server start
```
Or in configuration file:
```yaml
server:
  http:
    basic_auth: "foo:bar"
```
