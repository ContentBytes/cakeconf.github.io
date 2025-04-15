import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/* Socials */
const linkedinLink = "https://www.linkedin.com/company/content-bytes/";
const instagramLink = "https://www.instagram.com/contentbytes.krk/";
const facebookLink = "https://www.facebook.com/people/Content-Bytes/61564025612434/";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CAKE conf',
  tagline: 'Uniting the content enthusiasts!',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://cakeconf.contentbytes.pl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Content Bytes', // Usually your GitHub org/user name.
  projectName: 'cakeconf.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/cake-social-card.png',
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      /* title: 'My Site', */
      logo: {
        alt: 'CAKE conf logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'About', position: 'right'},
        {to: '/#speakers', label: 'Speakers', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'CAKE conf logo',
        src: 'img/logo.svg',
        height: 50,
      },
      links: [
        {
          title: 'CAKE conf',
          items: [
            {to: '/', label: 'About', position: 'right'},
            {to: '/#speakers', label: 'Speakers', position: 'right'},
          ],
        },
        {
          title: 'Content Bytes',
          items: [
            {
              label: "Instagram",
              href: instagramLink, 
            },
            {
              label: "Facebook",
              href: facebookLink,
            },
            {
              label: "LinkedIn",
              href: linkedinLink,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Content Bytes`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
