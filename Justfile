set dotenv-load

base_dir := justfile_directory()
tmp_dir := base_dir + "/tools/tmp"
partials_dir := base_dir + "/docs/payments/partials/connectors"
components_dir := base_dir + "/src/components"

default:
  @just --list

[group('connectors')]
connectors: connectors-capabilities connectors-generate-pages

[group('connectors')]
connectors-capabilities:
  @curl https://raw.githubusercontent.com/formancehq/payments/refs/heads/main/docs/other/connector-capabilities.json -s --output {{components_dir}}/connector-capabilities.json

[group('connectors')]
connectors-generate-pages:
  @curl https://raw.githubusercontent.com/formancehq/payments/refs/heads/main/openapi.yaml -s --output {{tmp_dir}}/payments-openapi.yaml
  @speakeasy openapi transform filter-operations --schema {{tmp_dir}}/payments-openapi.yaml --out {{tmp_dir}}/payments-openapi-filtered.json --operations v3GetConnectorConfig
  @npx -y widdershins {{tmp_dir}}/payments-openapi-filtered.json -o {{tmp_dir}}/connector-configs.md --user_templates={{base_dir}}/tools/templates/openapi3 --search false --language_tabs 'http:HTTP' --summary --omitHeader
  @jq -s . {{tmp_dir}}/connector-configs.md > {{tmp_dir}}/connector-configs.json
  @yarn run connectors
  @rm {{tmp_dir}}/*
