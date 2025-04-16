// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import math from 'remark-math';
import katex from 'rehype-katex';
import  path from 'node:path';

const darkCodeTheme = require('./src/prisma/theme-dark');

import type {Config} from '@docusaurus/types';
import { height } from '@mui/system';

export default async function createConfig() {

  const config = {
    title: 'Formance Developer Docs',
    tagline: 'The open source foundation you need to build and scale money-movements within your app',
    url: 'https://docs.formance.com/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicons/favicon.ico',
    organizationName: 'formancehq', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    markdown: {
      mermaid: true
    },
    themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-redoc'],
    webpack: {
      jsLoader: (isServer) => ({
        loader: require.resolve('swc-loader'),
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
            target: 'es2017',
          },
          module: {
            type: isServer ? 'commonjs' : 'es6',
          },
        },
      }),
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          sitemap: {
            filename: 'sitemap.xml',
          },
          docs: {
            path: './docs',
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [math],
            rehypePlugins: [katex],
            disableVersioning: false,
            lastVersion: 'current',
            versions: {
              current: {
                label: 'v3.x',
              },
            }
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          blog: false,
          pages: false,
          googleTagManager: {
            containerId: 'GTM-KF4MNHHS',
          }
        }),
      ],
      [
        'redocusaurus',
        {
          debug: Boolean(process.env.DEBUG || process.env.CI),
          config: path.join(__dirname, 'redocly.yaml'),
          specs: [
            {
              spec: './openapi/v1.10.json',
              route: '/api/v1.10',
              id: 'api-v1-10',
            },
            {
              spec: './openapi/v2.0.json',
              route: '/api/v2.0',
              id: 'api-v2-0',
            }, 
            {
              spec: './openapi/v3.0.json',
              route: '/api/v3.0',
              id: 'api-v3-0',
            },
            {
              spec: './openapi/generic-connector.yaml',
              route: '/api/generic-connector',
              id: 'api-generic-connector',
            }
          ],
        }
      ]
    ],

    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        mermaid: {
          theme: { light: 'base', dark: 'base' },
        },
        docs: {
          sidebar: {
            autoCollapseCategories: true,
          }
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        navbar: {
          // style: 'light',
          logo: {
            alt: 'Formance Logo',
            src: 'img/formance-logo.svg',
            href: 'https://www.formance.com/',
            srcDark: 'img/formance-logo-dark.svg',
          },
          items: [
            {
              type: "docSidebar",
              sidebarId: "main",
              position: "left",
              label: "Start here",
            },
            {
              type: "docSidebar",
              sidebarId: "ledger",
              position: "left",
              label: "Ledger",
            },
            {
              type: "docSidebar",
              sidebarId: "numscript",
              position: "left",
              label: "Numscript",
            },
            {
              type: "docSidebar",
              sidebarId: "payments",
              position: "left",
              label: "Payments",
            },
            {
              type: "docSidebar",
              sidebarId: "wallets",
              position: "left",
              label: "Wallets",
            },
            {
              type: "docSidebar",
              sidebarId: "flows",
              position: "left",
              label: "Flows",
            },
            {
              type: "docSidebar",
              sidebarId: "reconciliation",
              position: "left",
              label: "Reconciliation",
            },
            {
              type: "docSidebar",
              sidebarId: "platform",
              position: "left",
              label: "Platform",
            },
            {
              type: "docSidebar",
              sidebarId: "API",
              position: "left",
              label: "API Docs",
            },
            {
              type: 'docsVersionDropdown',
              position: 'right',
            },
            // {
            //   href: 'https://github.com/formancehq/stack',
            //   label: 'GitHub',
            //   position: 'right',
            // },
             {
               label: 'Go to Website',
               position: 'right',
               href: 'https://www.formance.com/',
             },
          ],
        },
        footer: {
          style: 'light',
          links: [
            {
              title: 'Documentation',
              items: [
                {
                  label: 'Ledger',
                  to: 'ledger',
                },
                {
                  label: 'Payments',
                  to: 'payments',
                },
                {
                  label: 'Wallets',
                  to: 'wallets',
                },
                {
                  label: 'Flows',
                  to: 'flows',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Slack',
                  href: 'https://bit.ly/formance-slack',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/formancehq',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/formancehq/stack',
                },
                {
                  label: 'Cloud Status',
                  href: 'https://status.formance.com',
                },
              ],
            },
          ],
          copyright: `Copyright © 2021-2025 Formance, Inc`,
        },
        prism: {
          theme: darkCodeTheme,
          additionalLanguages: ['yaml', 'json', 'csharp', 'python', 'typescript', 'php', 'kotlin', 'javascript', 'java', 'go', 'ruby', 'sql', 'bash', 'scala'],
        },
        posthog: {
          apiKey: 'phc_hRDv01yOHJNUM7l5SmXPUtSQUuNw4r5am9FtV83Z9om',
          appUrl: 'https://app.posthog.com',  // optional
          enableInDevelopment: false,  // optional
        },
        algolia: {
          appId: 'IHGRMFJIIG',
          apiKey: '7864304f16ea5f9d27b7a553c83ad17a',
          indexName: 'numary',

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
          externalUrlRegex: 'docs\\.formance\\.com',

          // Optional: Algolia search parameters
          searchParameters: {},

          // Optional: path for search page that enabled by default (`false` to disable it)
          searchPagePath: 'search',

          //... other Algolia params
        },
      })
  } satisfies Config;

  return config;
}