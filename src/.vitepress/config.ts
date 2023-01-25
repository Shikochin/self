import { defineConfig } from 'vitepress'
import headConfigs from './configs/head'
import themeConfigs from './configs/theme'

export default defineConfig({
    lang: 'zh-CN',
    title: 'CQBlog',
    description: "CQBerry's personal website",
    lastUpdated: true,
    markdown: {
        lineNumbers: true,
    },
    head: headConfigs,
    cleanUrls: 'without-subfolders',
    themeConfig: themeConfigs,
})
