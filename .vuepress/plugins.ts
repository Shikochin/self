import type { PluginConfig } from 'vuepress';
import { commentPlugin } from 'vuepress-plugin-comment2';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';
import { searchPlugin } from '@vuepress/plugin-search';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'

const pluginConfigs: PluginConfig = [
    commentPlugin({
        comment: true,
        provider: 'Waline',
        serverURL: 'https://waline.chinq.xyz',
        requiredMeta: ['nick', 'mail'],
        emoji: ['https://unpkg.com/@waline/emojis@1.0.1/alus'],
        dark: 'html[data-theme="dark"]',
        locale: {
            level0: 'Null',
            level1: 'Undefined',
            level2: 'Boolean',
            level3: 'Number',
            level4: 'BigInt',
            level5: 'String',
            level6: 'Symbol',
            level7: 'Object',
            placeholder: '来发评论呀~'
        }
    }),
    registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
    }),
    searchPlugin({
        hotKeys: ['ctrl', 'k']
    }),
    pwaPlugin({}),
    pwaPopupPlugin({})
]

export default pluginConfigs;