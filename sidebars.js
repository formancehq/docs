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
  main: [
    {
      label: 'Formance Stack',
      type: 'doc',
      id: 'index'
    }
  ],

  ledger: [
    {
      label: 'Formance Ledger',
      type: 'doc',
      // collapsible: false,
      // collapsed: false,
      id: 'ledger/index'
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
      link: { type: 'doc', id: 'ledger/get-started/index' },
      items: [
        {
          type: 'doc',
          id: 'ledger/get-started/installation',
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
          link: { type: 'doc', id: 'ledger/get-started/hello-world/index' },
          items: [
            'ledger/get-started/hello-world/start-the-server',
            'ledger/get-started/hello-world/introducing-money',
            'ledger/get-started/hello-world/checking-balances',
            'ledger/get-started/hello-world/your-first-transaction'
          ]
        },
        {
          label: 'Mastering Numscript',
          type: 'category',
          collapsible: true,
          collapsed: true,
          link: { type: 'doc', id: 'ledger/numscript/index' },
          customProps: {
            icon: '🔢',
            description: 'Get started by creating your first transaction.',
          },
          items: [
            {
                type:'doc',
                id: 'ledger/numscript/prerequisites',
                customProps: {
                    icon: '1️⃣',
                },
            },
            {
                type:'doc',
                id: 'ledger/numscript/multi-destination/index',
                customProps: {
                    icon: '➗',
                },
            },
            {
                type:'doc',
                id: 'ledger/numscript/multi-source/index',
                customProps: {
                  icon: '✖️',
                },
            },
            {
                type:'doc',
                id: 'ledger/numscript/http/index',
                customProps: {
                  icon: '🕸',
                },
            },
            {
                type:'doc',
                id: 'ledger/numscript/templates/index',
                customProps: {
                  icon: '📝',
                },
            },
            {
                type:'doc',
                id: 'ledger/numscript/currencies/index',
                customProps: {
                  icon: '💴',
                },
            },
            {
                type:'doc',
                id: 'ledger/numscript/metadata/index',
                customProps: {
                  icon: '📌',
                },
            },
            {
                type:'doc',
                id: 'ledger/numscript/kept/index',
                customProps: {
                  icon: '🍕',
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
        'ledger/advanced/publisher-http',
        'ledger/advanced/publisher-kafka',
      ],
    },
    {
      label: '🛠 Operations',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'ledger/operations/installation',
        'ledger/operations/configuration',
        'ledger/operations/env-vars',
        'ledger/operations/storages',
        'ledger/operations/upgrade',
        'ledger/operations/authentication',
        'ledger/operations/using-the-control-dashboard',
        // 'operations/running-in-production',
        'ledger/api/sdks'
      ],
    },
    {
      label: '📖 Reference',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'ledger/reference/api',
        'ledger/reference/ledgers',
        'ledger/reference/accounts',
        'ledger/reference/transactions',
        'ledger/reference/unambiguous-monetary-notation',
        'ledger/reference/architecture',
        'ledger/reference/concurrency-model',
        {
          label: 'Numscript',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            'ledger/reference/numscript/machine',
            'ledger/reference/numscript/sources',
            'ledger/reference/numscript/destinations',
            'ledger/reference/numscript/variables',
            'ledger/reference/numscript/metadata',
            'ledger/reference/numscript/rounding',
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
        'ledger/examples/in-app-currency',
        'ledger/examples/marketplace-sales-routing',
      ],
    },
  ],
  payments: [
    {
      label: 'Formance Payments',
      type: 'doc',
      id: 'payments/index'
    },
    {
      label: '📖 Reference',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        'payments/reference/api',
      ],
    },
  ]
};

module.exports = sidebars;
