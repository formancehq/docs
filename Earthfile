VERSION 0.8

IMPORT github.com/formancehq/earthly:tags/v0.12.0 AS core

update-operator-doc:
    FROM core+base-image
    RUN mkdir -p docs/operator
    COPY --dir github.com/formancehq/operator:main+generate-docs/* docs/operator
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
    RUN yarn build
    SAVE ARTIFACT build AS LOCAL build
