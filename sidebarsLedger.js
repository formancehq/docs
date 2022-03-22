/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  ledger: [
    {
      label: "Ledger OSS",
      type: "category",
      collapsible: true,
      collapsed: true,
      items:[
        {
          label: "Getting Started",
          type: "category",
          collapsible: false,
          collapsed: false,
          link: { type: 'doc', id: 'get-started/index' },
          items: [
            "get-started/installation",
            {
              label: "Hello World",
              type: "category",
              collapsible: true,
              collapsed: true,
              link: { type: 'doc', id: 'get-started/hello-world/index' },
              items: [
                "get-started/hello-world/start-the-server",
                "get-started/hello-world/introducing-money",
                "get-started/hello-world/checking-balances",
                "get-started/hello-world/your-first-transaction"
              ]
            }
          ],
        },
        {
          label: "Reference",
          type: "category",
          collapsible: false,
          collapsed: false,
          items: [
            "reference/installation",    
            "reference/ledgers",
            "reference/accounts",
            "reference/transactions",
            {
              label: "Numscript",
              type: "category",
              collapsible: true,
              collapsed: true,
              items: [
                "reference/numscript/machine",
                "reference/numscript/sources",
                "reference/numscript/destinations",
                "reference/numscript/variables",
                "reference/numscript/metadata",
                "reference/numscript/rounding",
              ],
            },
          ],
        },
        {
          label: "Guides",
          type: "category",
          collapsible: true,
          collapsed: false,
          items: [
            "guides/configuration",
            "guides/issuing-money",
            "guides/numscript",
            "guides/using-the-control-dashboard",
            "guides/materialized-transactions",
            "guides/unambiguous-monetary-notation",
          ],
        },
        {
          label: "Examples",
          type: "category",
          collapsible: false,
          collapsed: false,
          items: [
            "examples/in-app-currency",
            "examples/marketplace-sales-routing",
          ],
        },
        {
          label: "Advanced",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            "advanced/architecture",
            "advanced/storages",
            "advanced/authentication",
            "advanced/running-in-production",
            "advanced/concurrency-model",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
