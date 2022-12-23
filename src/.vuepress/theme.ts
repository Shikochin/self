import type { ThemeOptions } from 'vuepress-theme-hope'
import navbarOptions from './navbar'
import sidebarOptions from './sidebar'

const themeOptions: ThemeOptions = {
    hostname: 'https://www.chinq.xyz',
    author: 'CHINQ',
    logo: '/assets/imgs/icons/avatar.webp',
    repo: 'CQBerry/self',
    docsDir: 'src',
    navbar: navbarOptions,
    sidebar: sidebarOptions,
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

export default themeOptions
