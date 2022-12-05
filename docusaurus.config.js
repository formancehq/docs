// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Formance Developer Docs',
  tagline: 'The open source foundation you need to build and scale money-movements within your app',
  url: 'https://docs.formance.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'formancehq', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  stylesheets: [
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;400;500;600&display=swap',
    'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap',
  ],

  plugins: [
    // 'posthog-docusaurus',
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {},
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
        pages: false,
      }),
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            spec: './openapi/v0.2.8.json',
            route: '/api/stack/v0.2.8',
            id: 'stack',
          }
      ],
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        // style: 'light',
        logo: {
          alt: 'Formance Logo',
          src: 'img/logo_numary.svg',
          href: '/',
        },
        items: [
          {
            label: '⚡️ Stack API Reference',
            position: 'right',
            items: [
              {
                label: 'v0.2.8',
                to: '/api/stack/v0.2.8',
              }
            ],
          },
          {
            href: 'https://github.com/formancehq',
            label: 'GitHub',
            position: 'right',
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
                to: '/ledger',
              },
              {
                label: 'Payments',
                to: '/payments',
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
                href: 'https://twitter.com/formancehq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/formancehq/ledger',
              },
              {
                label: 'Cloud Status',
                href: 'https://status.formance.com',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-2022 Numaire, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      posthog: {
        apiKey: 'phc_hRDv01yOHJNUM7l5SmXPUtSQUuNw4r5am9FtV83Z9om',
        appUrl: 'https://app.posthog.com',  // optional
        enableInDevelopment: false,  // optional
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'IHGRMFJIIG',

        // Public API key: it is safe to commit it
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
};

module.exports = config;
