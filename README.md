# Formance Developer Docs

This repository holds the main markdown files behind [docs.formance.com](https://docs.formance.com)

### Installation & Development

This documentation is based on Docusaurus version 2

```SHELL
yarn
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Updating Connectors

New connectors are regularly added to payments service. To keep the docs up to date with what connectors exist we can autogenerate the most basic components of the documents.

```SHELL
just connectors
```

This command runs a script which fetches data from payments repository and generates some mdx pages and components based on that. Once the new pages are generated, they can be added to sidebars.ts (this part is not automated)
