const path = require('path')

const url = process.env.SITE_URL || 'https://effector.now.sh'

module.exports = {
  title: 'effector',
  tagline: 'The tagline of my site',
  url,
  baseUrl: '/',
  // editUrl: 'https://github.com/zerobias/effector/tree/master/docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'zerobias', // Usually your GitHub org/user name.
  projectName: 'effector', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'effector',
      logo: {
        alt: 'effector logo',
        src: 'img/comet.png',
      },
      links: [
        {to: 'docs/introduction/installation', label: 'Docs', position: 'left'},
        {to: 'docs/api/effector/effector', label: 'API', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/zerobias/effector',
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
              label: 'Getting Started',
              to: 'docs/introduction/installation',
            },
            {
              label: 'API Reference',
              to: 'docs/api/effector/effector',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} zerobias, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [path.resolve(__dirname, './plugins/flow.js')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../../docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
