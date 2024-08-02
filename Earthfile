VERSION 0.8

IMPORT github.com/formancehq/earthly:tags/v0.12.0 AS core

update-operator-doc:
    FROM core+base-image
    RUN mkdir -p docs/operator
    COPY --dir github.com/formancehq/stack/components/operator:releases/v2.0.0+generate-docs/* docs/operator
    SAVE ARTIFACT docs/operator/* AS LOCAL docs/operator/

build:
    FROM core+base-image
    RUN apk update && apk add yarn nodejs npm
    WORKDIR /src
    COPY package.* yarn.lock .
    RUN yarn install
    CACHE .docusaurus
    COPY . .
    COPY --dir +update-operator-doc/* docs/operator
    COPY --dir +update-membership-openapi/* openapi/membership.yaml
    RUN yarn build
    SAVE ARTIFACT build AS LOCAL build
    SAVE ARTIFACT openapi/membership.yaml AS LOCAL openapi/membership.yaml


update-membership-openapi:
    FROM core+base-image
    WORKDIR /src
    COPY (github.com/formancehq/stack/components/fctl+membership-openapi/openapi.yaml) .
    SAVE ARTIFACT ./openapi.yaml AS LOCAL ./openapi/membership.yaml
