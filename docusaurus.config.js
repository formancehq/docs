// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Numary Ledger\n',
  tagline: 'The open source foundation you need to build and scale money-movements within your app',
  url: 'https://docs.numary.com/',
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
      '@docusaurus/plugin-content-docs',
      ({
        id: 'ledger',
        path: 'oss/ledger',
        routeBasePath: 'oss/ledger',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebar.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
        // versions: {
        //   current: {
        //     label: `Latest 🚧 `,
        //   },
        // },
      }),
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {},
        docs: {
          // versions: {
          //   current: {
          //     label: `Latest 🚧`,
          //   },
          // },
          // sidebarPath: require.resolve('./sidebarsCloud.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/numary/docs/edit/main/docs/',
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
            specUrl: 'https://raw.githubusercontent.com/numary/ledger/main/pkg/api/controllers/swagger.yaml',
            routePath: '/oss/ledger/reference/api',
          },
          // {
          //   specUrl: 'https://api.numary.cloud/swagger.json',
          //   routePath: '/api/cloud/',
          // }
      ],
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: 'Numary Logo',
          src: 'img/logo_numary.svg',
          href: '/oss/ledger/',
        },
        items: [
          // {
          //   label: '📚 Documentation',
          //   position: 'left',
          //   items: [
          //     {
          //       label: 'Ledger',
          //       to: '/oss/ledger/',
          //     },
          //   ],
          // },
          // {
          //   label: '☁️ Cloud',
          //   to: '/docs/introduction',
          //   position: 'left',
          // },
          // {
          //   label: 'API',
          //   position: 'left',
          //   items: [
          //     {
          //       label: 'Ledger',
          //       to: '/api/ledger/',
          //     },
          //     {
          //       label: 'Cloud',
          //       to: '/api/cloud/',
          //     }
          //   ],
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   docsPluginId: 'ledger',
          //   position: 'right',
          //   dropdownActiveClassDisabled: true,
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   dropdownActiveClassDisabled: true,
          // },
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
                href: 'https://github.com/numary/ledger',
              },
              {
                label: 'Service Status',
                href: 'https://status.numary.com',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-2022 Numaire, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      posthog: {
        apiKey: 'phc_hRDv01yOHJNUM7l5SmXPUtSQUuNw4r5am9FtV83Z9om',
        appUrl: 'https://app.posthog.com',  // optional
        enableInDevelopment: false,  // optional
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '1GW5NWTZRQ',

        // Public API key: it is safe to commit it
        apiKey: '8444a84a17fbf516710b9f112536ea20',

        indexName: 'NUMARY_LEDGER',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'docs\\.numary\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    })
};

module.exports = config;
