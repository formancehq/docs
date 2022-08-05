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
      // label: 'Formance Ledger',
      type: 'doc',
      // collapsible: false,
      // collapsed: false,
      id: 'oss/ledger/index'
      // link: { type: 'doc', id: 'index' },
      // items:[
      //   'help',
      // ],
    },
    {
      label: '🪁 Tutorials',
      type: 'category',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'oss/ledger/get-started/index' },
      items: [
        {
          type: 'doc',
          id: 'oss/ledger/get-started/installation',
          customProps: {
            icon: '💾',
          }
        },
        {
          label: 'Hello World',
          type: 'category',
          collapsible: true,
          collapsed: true,
          customProps: {
            icon: '👋🏾',
            description: 'Get started by creating your first transaction.',
          },
          link: { type: 'doc', id: 'oss/ledger/get-started/hello-world/index' },
          items: [
            'oss/ledger/get-started/hello-world/start-the-server',
            'oss/ledger/get-started/hello-world/introducing-money',
            'oss/ledger/get-started/hello-world/checking-balances',
            'oss/ledger/get-started/hello-world/your-first-transaction'
          ]
        },
        {
          label: 'Mastering Numscript',
          type: 'category',
          collapsible: true,
          collapsed: true,
          link: { type: 'doc', id: 'oss/ledger/numscript/index' },
          customProps: {
            icon: '🔢',
            description: 'Get started by creating your first transaction.',
          },
          items: [
            {
                type:'doc',
                id: 'oss/ledger/numscript/prerequisites',
                customProps: {
                    icon: '1️⃣',
                },
            },
            {
                type:'doc',
                id: 'oss/ledger/numscript/multi-destination/index',
                customProps: {
                    icon: '➗',
                },
            },
            {
                type:'doc',
                id: 'oss/ledger/numscript/multi-source/index',
                customProps: {
                  icon: '✖️',
                },
            },
            {
                type:'doc',
                id: 'oss/ledger/numscript/http/index',
                customProps: {
                  icon: '🕸',
                },
            },
            {
                type:'doc',
                id: 'oss/ledger/numscript/templates/index',
                customProps: {
                  icon: '📝',
                },
            },
            {
                type:'doc',
                id: 'oss/ledger/numscript/currencies/index',
                customProps: {
                  icon: '💴',
                },
            },
            {
                type:'doc',
                id: 'oss/ledger/numscript/metadata/index',
                customProps: {
                  icon: '📌',
                },
            },
          ],
        }
      ],
    },
    // {
    //   label: 'Ledger API',
    //   type: 'category',
    //   collapsible: true,
    //   collapsed: true,
    //   link: { type: 'doc', id: 'api/index' },
    //   items: [
    //     'api/sdks',
    //   ],
    // },
    // {
    //   label: 'Best Practices',
    //   type: 'category',
    //   collapsible: true,
    //   collapsed: true,
    //   // link: { type: 'doc', id: 'best-practices/index' },
    //   items: [
    //     'best-practices/currency-conversion/index',
    //   ],
    // },
    {
      label: '🧵 Guides',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'oss/ledger/advanced/publisher-http',
        'oss/ledger/advanced/publisher-kafka',
      ],
    },
    {
      label: '🛠 Operations',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'oss/ledger/operations/installation',
        'oss/ledger/operations/configuration',
        'oss/ledger/operations/env-vars',
        'oss/ledger/operations/storages',
        'oss/ledger/operations/upgrade',
        'oss/ledger/operations/authentication',
        'oss/ledger/operations/using-the-control-dashboard',
        // 'operations/running-in-production',
        'oss/ledger/api/sdks'
      ],
    },
    {
      label: '📖 Reference',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'oss/ledger/reference/api',
        'oss/ledger/reference/ledgers',
        'oss/ledger/reference/accounts',
        'oss/ledger/reference/transactions',
        'oss/ledger/reference/unambiguous-monetary-notation',
        'oss/ledger/reference/architecture',
        'oss/ledger/reference/concurrency-model',
        {
          label: 'Numscript',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            'oss/ledger/reference/numscript/machine',
            'oss/ledger/reference/numscript/sources',
            'oss/ledger/reference/numscript/destinations',
            'oss/ledger/reference/numscript/variables',
            'oss/ledger/reference/numscript/metadata',
            'oss/ledger/reference/numscript/rounding',
          ],
        },
      ],
    },
    {
      label: '🛵 Examples',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'oss/ledger/examples/in-app-currency',
        'oss/ledger/examples/marketplace-sales-routing',
      ],
    },
  ],
  stack: [
    {
      id: "stack/introduction",
      type: "doc",
    },
    {
      label: "Guides",
      type: "category",
      collapsible: false,
      collapsed: false,
      items: [
        'stack/guides/authentication',
      ]
    },
    {
      label: '📖 Reference',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'stack/reference/api',
      ],
    },
  ],
  payments: [
    {
      // label: 'Formance Ledger',
      type: 'doc',
      // collapsible: false,
      // collapsed: false,
      id: 'oss/payments/index'
      // link: { type: 'doc', id: 'index' },
      // items:[
      //   'help',
      // ],
    },
    {
      label: '📖 Reference',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'oss/payments/reference/api',
      ],
    },
  ]
};

module.exports = sidebars;
