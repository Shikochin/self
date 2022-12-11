import type { HopeThemeOptions } from 'vuepress-theme-hope'
import navbarConfigs from './navbar'
import sidebarConfigs from './sidebar'

const themeConfigs: HopeThemeOptions = {
    hostname: 'https://www.chinq.xyz',
    author: 'CHINQ',
    logo: '/assets/imgs/icons/avatar.webp',
    repo: 'CQBerry/blog',
    docsDir: 'src',
    navbar: navbarConfigs,
    sidebar: sidebarConfigs,
    footer: '<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh">CC BY-SA 4.0</a> Licensed | Copyright © 2021-present by CHINQ<br><a href="https://icp.gov.moe/?keyword=20206624">萌 ICP 备</a>',
    copyright: false,
    displayFooter: true,
    nextLink: false,
    prevLink: false,
    lastUpdated: true,
    contributors: true,
    plugins: {
        mdEnhance: {
            linkCheck: 'build',
            imageLazyload: true,
        },
    },
    iconAssets: 'iconfont',
}

export default themeConfigs
