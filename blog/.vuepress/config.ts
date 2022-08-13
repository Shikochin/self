import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import themeConfigs from './theme'
import pluginConfigs from './plugins'
import headConfigs from './head';

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'CHINQBlog',
    description: 'Stay young 😙',
    plugins: pluginConfigs,
    head: headConfigs,
    theme: hopeTheme(themeConfigs),
});