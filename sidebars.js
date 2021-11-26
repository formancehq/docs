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
      label: "Getting Started",
      type: "category",
      collapsible: false,
      collapsed: false,
      items: [
        "get-started/installation",
        "get-started/your-first-transaction"
      ],
    },
    {
      label: "Reference",
      type: "category",
      collapsible: false,
      collapsed: false,
      items: [
        "reference/ledgers",
        "reference/accounts",
        "reference/transactions",
        {
          label: "Numscript",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
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
      label: "Examples",
      type: "category",
      collapsible: false,
      collapsed: false,
      items: [
        "examples/in-app-currency",
      ],
    },
    {
      label: "Advanced",
      type: "category",
      collapsible: false,
      collapsed: false,
      items: [
        "advanced/architecture",
        "advanced/storages",
        "advanced/authentication",
        "advanced/running-in-production",
        "advanced/concurrency-model",
      ],
    },
  ]
};

module.exports = sidebars;
