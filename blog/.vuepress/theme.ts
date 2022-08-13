import type { HopeThemeOptions } from 'vuepress-theme-hope';
import navbarConfig from './navbar';
import sidebarConfig from './sidebar';

const themeOption: HopeThemeOptions = {
    hostname: 'https://www.chinq.xyz',
    author: 'CHINQ',
    logo: '/assets/imgs/logo.webp',
    repo: 'CQBerry/buelog',
    docsDir: 'blog',
    repoLabel: 'GitHub',
    navbar: navbarConfig,
    sidebar: sidebarConfig,
    footer: '<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh">CC BY-SA 4.0</a> Licensed | Copyright © 2021-present by CHINQ<br><a href="https://icp.gov.moe/?keyword=20206624">萌 ICP 备</a>',
    copyright: false,
    displayFooter: true,
    editLink: false,
    nextLink: false,
    prevLink: false,
    lastUpdated: true,
    contributors: true,
    plugins: {
        mdEnhance: {
            linkCheck: 'dev',
            lazyLoad: true,
            tex: true,
        }
    },
    iconAssets: 'fontawesome',
}

export default themeOption;