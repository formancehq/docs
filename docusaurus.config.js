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
      '@docusaurus/plugin-content-docs',
      ({
        id: 'ledger',
        path: 'oss/ledger',
        routeBasePath: 'oss/ledger',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebarsLedger.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
        versions: {
          current: {
            label: `Latest 🚧 `,
          },
        },
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
          versions: {
            current: {
              label: `Latest 🚧`,
            },
          },
          sidebarPath: require.resolve('./sidebarsCloud.js'),
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
            routePath: '/api/ledger/',
          },
          {
            specUrl: 'http://api.numary.cloud/swagger.json',
            routePath: '/api/cloud/',
          }
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
          href: '/oss/ledger/get-started/installation',
        },
        items: [
          {
            label: '📚 Documentation',
            position: 'left',
            items: [
              {
                label: 'Ledger',
                to: '/oss/ledger/get-started/installation',
              },
            ],
          },
          {
            label: '☁️ Cloud',
            to: '/docs/introduction',
            position: 'left',
          },
          {
            label: 'API',
            position: 'left',
            items: [
              {
                label: 'Ledger',
                to: '/api/ledger/',
              },
              {
                label: 'Cloud',
                to: '/api/cloud/',
              }
            ],
          },
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
                href: 'https://github.com/numary',
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
      }
    })
};

module.exports = config;
