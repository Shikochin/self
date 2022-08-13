import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import themeConfigs from './theme'
import pluginConfigs from './plugins'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'CHINQBlog',
    description: 'Stay young 😙',
    plugins: pluginConfigs,
    head: [['link', { rel: 'icon', href: '/assets/imgs/favicon.png' }]],
    theme: hopeTheme(themeConfigs),
});