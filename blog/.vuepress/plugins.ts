import type { PluginConfig } from 'vuepress';
import { commentPlugin } from "vuepress-plugin-comment2";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from "@vuepress/plugin-search";
import { path } from '@vuepress/utils'

const pluginConfig: PluginConfig = [
    commentPlugin({
        comment: true,
        provider: 'Waline',
        serverURL: 'https://waline.chinq.xyz',
        requiredMeta: ['nick'],
        emoji: ['https://unpkg.com/@waline/emojis@1.0.1/alus'],
        dark: 'html[data-theme="dark"]',
    }),
    registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
    }),
    searchPlugin({
        hotKeys: ['ctrl', 'k']
    }),
]

export default pluginConfig;