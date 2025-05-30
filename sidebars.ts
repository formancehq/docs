/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

//import { Collapse } from "@mui/material"
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars = {
  main: [
    {
      label: "Introduction",
      type: "doc",
      id: "index",
    },
    {
      label: "Getting Started",
      type: "category",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "getting-started/fctl-quick-start",
          customProps: {
            // icon: '💾',
          },
        },
        {
          type: "doc",
          id: "guides/newSandbox",
        },
        {
          type: "category",
          label: "Setup the SDK",
          link: {
            type: "doc",
            id: "getting-started/sdk/index",
          },
          items: [
            {
              type: "doc",
              id: "getting-started/sdk/setup-ts-js",
            },
            {
              type: "doc",
              id: "getting-started/sdk/setup-golang",
            },
          ],
        },
        {
          type: "doc",
          id: "getting-started/cleanup",
        },
      ],
    },
    {
      label: "Components",
      type: "category",
      collapsible: true,
      collapsed: false,
      items: [
        {
          label: "Ledger",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "ledger/index",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "ledger/ledger-tutorial",
              label: "Tutorial",
            },
            {
              label: "Accounting model",
              type: "category",
              link: { type: "doc", id: "ledger/advanced/accounting/accounting" },
              collapsible: true,
              collapsed: true,
              items: [
                "ledger/reference/accounts",
                "ledger/reference/transactions",
                "ledger/advanced/accounting/constraints",
                "ledger/advanced/accounting/source_destination",
                "ledger/advanced/accounting/credit-debit-to-src-dest",
              ],
            },
            {
              label: "Working with the Ledger",
              type: "category",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "ledger/advanced/asset-conversion",
                  label: "Currency conversion",
                },
                {
                  type: "doc",
                  id: "ledger/advanced/temporality",
                },
                "ledger/advanced/bulk-processing",
                "ledger/advanced/filtering",
                "ledger/advanced/buckets",
              ],
            },
            "ledger/advanced/scale",
            "ledger/advanced/publisher",
            {
              label: "Advanced Topics",
              type: "category",
              collapsible: true,
              collapsed: true,
              items: [
                "ledger/reference/concurrency-model",
                "ledger/reference/performance",
              ],
            },
          ],
        },
        {
          label: "Numscript",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "numscript/index",
              label: "Introduction",
            },
            {
              type: 'doc',
              id: 'numscript/structure',
            },
            {
              type: 'doc',
              id: 'numscript/embedding',
              label: "Selecting an interpreter",
            },
            {
              type: 'category',
              label: 'Reference',
              collapsible: true,
              collapsed: true,
              items: [
                'numscript/reference/send',
                'numscript/reference/sources',
                'numscript/reference/destinations',
                'numscript/reference/rounding',
                'numscript/reference/save',
                'numscript/reference/overdraft',
                'numscript/reference/variables',
                'numscript/reference/metadata',
              ]
            }
          ],
        },
        {
          label: "Connectivity (f.k.a: Payments)",
          type: "category",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "payments/index" },
          items: [
            {
              type: "doc",
              id: "payments/index",
              label: "Introduction",
            },
            {
              type: "category",
              label: "Concepts",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "payments/payments-concepts/index",
              },
              items: [
                {
                  type: "doc",
                  id: "payments/payments-concepts/accounts",
                  label: "Accounts",
                },
                {
                  type: "doc",
                  id: "payments/payments-concepts/payments",
                  label: "Payments",
                },
                {
                  type: "doc",
                  id: "payments/payments-concepts/transfer-initiation",
                  label: "Transfer Initiation",
                },
              ],
            },
            {
              type: "category",
              label: "Connectors",
              link: {
                type: "doc",
                id: "payments/connectors/index",
              },
              items: [
                {
                  type: "category",
                  label: "Generic",
                  link: {
                    type: "doc",
                    id: "payments/connectors/generic/getting-started",
                  },
                  items: [
                    {
                      type: "doc",
                      id: "payments/connectors/generic/how_generic_connectors_work",
                      label: "How it works",
                    },
                    {
                      type: "doc",
                      id: "payments/connectors/generic/api-reference",
                      label: "API Reference",
                    },
                  ],
                },
                {
                  type: "doc",
                  id: "payments/connectors/adyen",
                  label: "Adyen",
                },
                {
                  type: "doc",
                  id: "payments/connectors/atlar",
                  label: "Atlar",
                },
                {
                  type: "doc",
                  id: "payments/connectors/bankingcircle",
                  label: "BankingCircle",
                },
                {
                  type: "doc",
                  id: "payments/connectors/currencycloud",
                  label: "CurrencyCloud",
                },
                {
                  type: "doc",
                  id: "payments/connectors/mangopay",
                  label: "Mangopay",
                },
                {
                  type: "doc",
                  id: "payments/connectors/modulr",
                  label: "Modulr",
                },
                {
                  type: "doc",
                  id: "payments/connectors/moneycorp",
                  label: "Moneycorp",
                },
                {
                  type: "doc",
                  id: "payments/connectors/stripe",
                  label: "Stripe",
                },
                {
                  type: "doc",
                  id: "payments/connectors/wise",
                  label: "Wise",
                },
                {
                  type: "doc",
                  id: "payments/connectors/column",
                  label: "Column",
                },
              ],
            },
            {
              type: "doc",
              id: "payments/connectors/framework",
              label: "Build a Connector",
            },
          ],
        },
        {
          label: "Wallets",
          type: "category",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "wallets" },
          items: [
            {
              type: "autogenerated",
              dirName: "wallets",
            },
          ],
        },
        {
          label: "Flows",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "flows/index",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "flows/definition",
              label: "Workflows definition",
            },
            {
              type: "doc",
              id: "flows/execution",
              label: "Workflows execution",
            },
            {
              type: "category",
              label: "Stages reference",
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: "doc",
                  id: "flows/stages/send",
                  label: "Send",
                },
                {
                  type: "doc",
                  id: "flows/stages/wait-event",
                  label: "Waiting for events",
                },
                {
                  type: "doc",
                  id: "flows/stages/wait-delay",
                  label: "Waiting for a delay",
                },
              ],
            },
            {
              type: "category",
              label: "Examples",
              items: [
                {
                  type: "doc",
                  id: "flows/examples/ledger-to-ledger",
                  label: "Ledger to Ledger",
                },
                {
                  type: "doc",
                  id: "flows/examples/payment-to-wallet",
                  label: "Payment to Wallet",
                },
                {
                  type: "doc",
                  id: "flows/examples/stripe-payout",
                  label: "Ledger to Payout",
                },
              ],
            },
          ],
        },
        {
          label: "Reconciliation",
          type: "category",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "reconciliation" },
          items: [
            {
              type: "autogenerated",
              dirName: "reconciliation",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Platform",
      items: [
        {
          type: "doc",
          id: "stack/architecture",
        },
        {
          type: "doc",
          id: "stack/authentication/index",
          label: "Authentication",
        },
        {
          type: "doc",
          id: "getting-started/invite",
        },
        {
          label: "Events",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "webhooks/index",
              label: "Webhooks",
            },
          ],
        },
        {
          type: "category",
          label: "Observability",
          items: [
            {
              type: "doc",
              id: "stack/observability/metrics",
            },
          ],
        },
        {
          type: "doc",
          id: "stack/sdk/index",
          label: "SDKs",
        },
        {
          type: "doc",
          id: "stack/versions",
        },
        {
          type: "category",
          label: "Enterprise",
          items: [
            {
              type: "doc",
              id: "stack/ee/audit-log",
            },
            // {
            //   type: "doc",
            //   id: "stack/ee/sso",
            // },
            {
              type: "doc",
              id: "stack/ee/rbac",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Deployment",
      link: {
        type: "doc",
        id: "deployment/introduction",
      },
      items: [
        {
          label: "Formance Cloud Solutions",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "deployment/cloud/intro",
            },
            {
              type: "category",
              label: "Formance CloudPrem 1",
              items: [
                { type: "doc", id: "deployment/cloudprem/intro" },
                {
                  type: "link",
                  label: "Operator Deployment",
                  href: "/operator/Requirements",
                },
                {
                  type: "category",
                  label: "Private Region Deployment",
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      id: "deployment/cloudprem/private-regions",
                    },
                    {
                      type: "doc",
                      id: "deployment/cloudprem/agent",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Stack Deployment",
                  link: {
                    type: "doc",
                    id: "deployment/cloudprem/usage",
                  },
                  collapsed: false,
                  items: [
                    {
                      type: "link",
                      label: "Creation",
                      href: "/deployment/cloudprem/usage#create-a-stack",
                    },
                    {
                      type: "link",
                      label: "Enable Modules",
                      href: "/deployment/cloudprem/usage#enabledisable-stack-modules",
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Formance CloudPrem 2",
              items: [
                { type: "doc", id: "deployment/cloudprem2/intro" },
                {
                  type: "doc",
                  id: "deployment/cloudprem2/cloudprem",
                },
                {
                  type: "doc",
                  id: "deployment/cloudprem2/operator",
                },
                {
                  type: "doc",
                  id: "deployment/cloudprem2/stack",
                },
              ],
            },
          ],
        },
        {
          label: "Operator",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "operator",
            },
          ],
        },
        {
          type: "doc",
          id: "deployment/backups",
        },
      ],
    },
    {
      label: "Resources",
      type: "category",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "stack/unambiguous-monetary-notation",
          label: "Monetary notation (UMN)",
        },
        {
          type: "doc",
          id: "stack/releases",
        },
        {
          type: "doc",
          id: "stack/security",
        },
      ],
    },
    {
      type: "doc",
      id: "help",
      label: "Getting Help",
    },
    {
      type: "doc",
      id: "v3.x-changelog",
      label: "Changelog",
    },
    {
      type: "doc",
      id: "api",
      label: "API Reference",
    },
  ],
} satisfies SidebarsConfig;

module.exports = sidebars;
