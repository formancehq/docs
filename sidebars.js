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
  docs: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      label: "Ledger OSS",
      type: "category",
      collapsible: true,
      collapsed: true,
      items: [
        {
          label: "Getting Started",
          type: "category",
          collapsible: false,
          collapsed: false,
          items: [
            "ledger-oss/get-started/installation",
            "ledger-oss/get-started/your-first-transaction"
          ],
        },
        {
          label: "Reference",
          type: "category",
          collapsible: false,
          collapsed: false,
          items: [
            "ledger-oss/reference/ledgers",
            "ledger-oss/reference/accounts",
            "ledger-oss/reference/transactions",
            {
              label: "Numscript",
              type: "category",
              collapsible: true,
              collapsed: true,
              items: [
                "ledger-oss/reference/numscript/sources",
                "ledger-oss/reference/numscript/destinations",
                "ledger-oss/reference/numscript/variables",
                "ledger-oss/reference/numscript/metadata",
                "ledger-oss/reference/numscript/rounding",
              ],
            },
          ],
        },
        {
          label: "Examples",
          type: "category",
          collapsible: false,
          collapsed: false,
          items: [
            "ledger-oss/examples/in-app-currency",
          ],
        },
        {
          label: "Advanced",
          type: "category",
          collapsible: false,
          collapsed: false,
          items: [
            "ledger-oss/advanced/architecture",
            "ledger-oss/advanced/storages",
            "ledger-oss/advanced/authentication",
            "ledger-oss/advanced/running-in-production",
            "ledger-oss/advanced/concurrency-model",
          ],
        },
      ],
    },
    {
      label: "Numary Cloud",
      type: "category",
      collapsible: false,
      collapsed: false,
      items: [
        "ledger-oss/get-started/installation",
        "ledger-oss/get-started/your-first-transaction"
      ],
    },
  ],
  cloud: [
    {
      id: "cloud/introduction",
      type: "doc",
    },
    {
      label: "Guides",
      type: "category",
      collapsible: false,
      collapsed: false,
      items: [
        "cloud/guides/your-first-ledger",
      ]
    }
  ]
};

module.exports = sidebars;
