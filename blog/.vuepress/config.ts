import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import themeOption from './theme'
import pluginConfig from './plugins'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'CHINQBlog',
    description: 'Stay young 😙',
    plugins: pluginConfig,
    head: [['link', { rel: 'icon', href: '/assets/imgs/favicon.png' }]],
    theme: hopeTheme(themeOption),
});