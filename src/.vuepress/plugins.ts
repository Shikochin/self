import type { PluginConfig } from 'vuepress'
import { commentPlugin } from 'vuepress-plugin-comment2'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

const pluginConfigs: PluginConfig = [
    commentPlugin({
        comment: true,
        provider: 'Giscus',
        repo: 'CQBerry/blog',
        repoId: 'R_kgDOHzsJjA',
        category: 'Comments',
        categoryId: 'DIC_kwDOHzsJjM4CSnTe',
    }),
    registerComponentsPlugin({
        components: {
            friendlink: path.resolve(__dirname, './components/friendlink.vue'),
            hitokoto: path.resolve(__dirname, './components/hitokoto.vue'),
        },
    }),
]

export default pluginConfigs
