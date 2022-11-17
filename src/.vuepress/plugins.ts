import type { PluginConfig } from "vuepress";
import { commentPlugin } from "vuepress-plugin-comment2";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import { searchPlugin } from "@vuepress/plugin-search";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { pwaPopupPlugin } from "@vuepress/plugin-pwa-popup";

const pluginConfigs: PluginConfig = [
    commentPlugin({
        comment: true,
        provider: "Giscus",
        repo: "CQBerry/blog",
        repoId: "R_kgDOHzsJjA",
        category: "Announcements",
        categoryId: "DIC_kwDOHzsJjM4CSnOe"
    }),
    registerComponentsPlugin({
        components: {
            friendlink: path.resolve(__dirname, "./components/friendlink.vue"),
            hitokoto: path.resolve(__dirname, "./components/hitokoto.vue"),
        },
    }),
    searchPlugin({
        hotKeys: ["ctrl", "k"],
    }),
    pwaPlugin({}),
    pwaPopupPlugin({}),
];

export default pluginConfigs;
