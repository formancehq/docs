// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Numary Hub Resources\n',
  tagline: 'The open foundation you need to build and scale money-movements within your app',
  url: 'https://docs.numary.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'numary', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  stylesheets: [
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;400;500;600&display=swap',
  ],

  plugins: [
      'posthog-docusaurus',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { to: '/', from: '/docs/introduction' },
          { to: '/docs/installation-1', from: '/docs/ledger-oss/get-started/installation' },
          { to: '/docs/your-first-transaction', from: '/docs/ledger-oss/get-started/your-first-transaction' },
          { to: '/docs/ledgers', from: '/docs/ledger-oss/reference/ledgers' },
          { to: '/docs/accounts', from: '/docs/ledger-oss/reference/accounts' },
          { to: '/docs/transaction-model', from: '/docs/ledger-oss/reference/transactions' },
          { to: '/docs/machine-instructions', from: '/docs/ledger-oss/reference/numscript/machine' },
          { to: '/docs/sources', from: '/docs/ledger-oss/reference/numscript/sources' },
          { to: '/docs/destinations', from: '/docs/ledger-oss/reference/numscript/destinations' },
          { to: '/docs/injecting-variables', from: '/docs/ledger-oss/reference/numscript/variables' },
          { to: '/docs/using-metadata', from: '/docs/ledger-oss/reference/numscript/metadata' },
          { to: '/docs/rounding', from: '/docs/ledger-oss/reference/numscript/rounding' },
          { to: '/docs/configuration', from: '/docs/ledger-oss/guides/configuration' },
          { to: '/docs/creating-money', from: '/docs/ledger-oss/guides/issuing-money' },
          { to: '/docs/numscript', from: '/docs/ledger-oss/guides/numscript' },
          { to: '/docs/using-the-control-dashboard', from: '/docs/ledger-oss/guides/using-the-control-dashboard' },
          { to: '/docs/materialized-transactions', from: '/docs/ledger-oss/guides/materialized-transactions' },
          { to: '/docs/assets', from: '/docs/ledger-oss/guides/unambiguous-monetary-notation' },
          { to: '/docs/creating-a-in-game-currency', from: '/docs/ledger-oss/examples/in-app-currency' },
          { to: '/docs/marketplace-sales-routing', from: '/docs/ledger-oss/examples/marketplace-sales-routing' },
          { to: '/docs/architecture', from: '/docs/ledger-oss/advanced/architecture' },
          { to: '/docs/storages', from: '/docs/ledger-oss/advanced/storages' },
          { to: '/docs/authentication', from: '/docs/ledger-oss/advanced/authentication' },
          { to: '/docs/running-in-production', from: '/docs/ledger-oss/advanced/running-in-production' },
          { to: '/docs/concurrency-model', from: '/docs/ledger-oss/advanced/concurrency-model' },
          // { to: '/reference/get_-info-1', from: '/api/ledger/#tag/server/paths/~1_info/get' },
          // { to: '/reference/get_-ledger-accounts', from: '/api/ledger/#/paths/~1{ledger}~1accounts/get' },
          // { to: '/reference/get_-ledger-accounts-accountid', from: '/api/ledger/#/paths/~1{ledger}~1accounts~1{accountId}/get' },
          // { to: '/reference/post_-ledger-accounts-accountid-metadata', from: '/api/ledger/#/paths/~1{ledger}~1accounts~1{accountId}~1metadata/post' },
          // { to: '/reference/get_-ledger-mapping', from: '/api/ledger/#tag/contracts/paths/~1{ledger}~1mapping/get' },
          // { to: '/reference/put_-ledger-mapping', from: '/api/ledger/#tag/mapping/paths/~1{ledger}~1mapping/put' },
          // { to: '/reference/post_-ledger-script-1', from: '/api/ledger/#tag/script/paths/~1{ledger}~1script/post' },
          // { to: '/reference/get_-ledger-stats', from: '/api/ledger/#tag/stats/paths/~1{ledger}~1stats/get' },
          // { to: '/reference/get_-ledger-transactions-1', from: '/api/ledger/#tag/transactions/paths/~1{ledger}~1transactions/get' },
          // { to: '/reference/post_-ledger-transactions-1', from: '/api/ledger/#tag/transactions/paths/~1{ledger}~1transactions/post' },
          // { to: '/reference/get_-ledger-transactions-txid', from: '/api/ledger/#tag/transactions/paths/~1{ledger}~1transactions~1{txid}/get' },
          // { to: '/reference/post_-ledger-transactions-txid-metadata', from: '/api/ledger/#tag/transactions/paths/~1{ledger}~1transactions~1{txid}~1metadata/post' },
          // { to: '/reference/post_-ledger-transactions-txid-reverta', from: '/api/ledger/#tag/transactions/paths/~1{ledger}~1transactions~1{txid}~1revert/post' }
        ],
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {},
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/numary/docs/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            specUrl: 'https://api.numary.cloud/swagger.json',
            routePath: '/api/cloud/',
          },
          {
            specUrl: 'https://api.numary.cloud/swagger.ledger.json',
            routePath: '/api/ledger/',
          }
      ],
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Numary Logo',
          src: 'img/logo_numary.svg',
        },
        items: [
          {
            label: 'Documentation',
            position: 'left',
            items: [
              {
                label: 'Cloud',
                to: '/docs/cloud/introduction',
              },
              {
                label: 'Ledger',
                to: '/docs/ledger-oss/get-started/installation',
              },
            ],
          },
          {
            label: 'API',
            position: 'left',
            items: [
              {
                label: 'Cloud',
                to: '/api/cloud/',
              },
              {
                label: 'Ledger',
                to: '/api/ledger/',
              },
            ],
          },
          {
            href: 'https://github.com/numary',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/introduction/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/xyHvcbzk4w',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/numaryhq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/numary',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Numary, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      posthog: {
        apiKey: 'phc_hRDv01yOHJNUM7l5SmXPUtSQUuNw4r5am9FtV83Z9om',
        appUrl: 'https://app.posthog.com',  // optional
        enableInDevelopment: false,  // optional
      }
    })
};

module.exports = config;
