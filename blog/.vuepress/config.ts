import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import navbarConfig from './navbar';
import sidebarConfig from './sidebar';
import { commentPlugin } from "vuepress-plugin-comment2";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'CHINQBlog',
    description: 'Stay young 😙',
    plugins: [
        commentPlugin({
            comment: true,
            provider: 'Waline',
            serverURL: 'https://waline.chinq.xyz',
            requiredMeta: ['nick'],
            emoji: ['https://unpkg.com/@waline/emojis@1.0.1/alus'],
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        searchPlugin({
            hotKeys: ['ctrl','k']
        }),
    ],
    head: [['link', { rel: 'icon', href: '/assets/imgs/favicon.png' }]],
    theme: hopeTheme({
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
    }),
});
