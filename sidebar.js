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
      label: 'Formance Ledger',
      type: 'category',
      collapsible: false,
      collapsed: false,
      link: { type: 'doc', id: 'index' },
      items:[
        'help',
        {
          label: 'Getting Started',
          type: 'category',
          collapsible: false,
          collapsed: false,
          link: { type: 'doc', id: 'get-started/index' },
          items: [
            {
              type: 'doc',
              id: 'get-started/installation',
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
              link: { type: 'doc', id: 'get-started/hello-world/index' },
              items: [
                'get-started/hello-world/start-the-server',
                'get-started/hello-world/introducing-money',
                'get-started/hello-world/checking-balances',
                'get-started/hello-world/your-first-transaction'
              ]
            },
          ],
        },
        {
          label: 'Numscript',
          type: 'category',
          collapsible: true,
          collapsed: true,
          link: { type: 'doc', id: 'numscript/index' },
          items: [
            {
                type:'doc',
                id: 'numscript/prerequisites',
                customProps: {
                    icon: '1️⃣',
                },
            },
            {
                type:'doc',
                id: 'numscript/multi-destination/index',
                customProps: {
                    icon: '➗',
                },
            },
            {
                type:'doc',
                id: 'numscript/multi-source/index',
                customProps: {
                  icon: '✖️',
                },
            },
            {
                type:'doc',
                id: 'numscript/http/index',
                customProps: {
                  icon: '🕸',
                },
            },
            {
                type:'doc',
                id: 'numscript/templates/index',
                customProps: {
                  icon: '📝',
                },
            },
            {
                type:'doc',
                id: 'numscript/currencies/index',
                customProps: {
                  icon: '💴',
                },
            },
            {
                type:'doc',
                id: 'numscript/metadata/index',
                customProps: {
                  icon: '📌',
                },
            },
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
          label: 'Operations',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            'operations/configuration',
            'operations/using-the-control-dashboard',
            'operations/storages',
            'operations/authentication',
            // 'operations/running-in-production',
            'operations/env-vars',
            'operations/upgrade',
            'operations/publisher-http',
            'operations/publisher-kafka',
            'api/sdks'
          ],
        },
        {
          label: 'Reference',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            'reference/architecture',
            'reference/installation',    
            'reference/ledgers',
            'reference/accounts',
            'reference/transactions',
            'reference/unambiguous-monetary-notation',
            'reference/concurrency-model',
            {
              label: 'Numscript',
              type: 'category',
              collapsible: true,
              collapsed: true,
              items: [
                'reference/numscript/machine',
                'reference/numscript/sources',
                'reference/numscript/destinations',
                'reference/numscript/variables',
                'reference/numscript/metadata',
                'reference/numscript/rounding',
              ],
            },
            {
              label: 'API',
              type: 'link',
              href: '/oss/ledger/reference/api',
            },
          ],
        },
        {
          label: 'Examples',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            'examples/in-app-currency',
            'examples/marketplace-sales-routing',
          ],
        },
        {
          label: 'Changelog',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            'changelog/v1.5.0',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
