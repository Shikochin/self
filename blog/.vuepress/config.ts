import {defineUserConfig} from "vuepress";
import {hopeTheme} from "vuepress-theme-hope";
import pluginConfigs from "./plugins";
import headConfigs from "./head";
import themeConfigs from "./theme";

export default defineUserConfig({
    lang: "zh-CN",
    title: "CHINQBlog",
    description: "Stay young 😙",
    pagePatterns: ["**/*.md", "!.vuepress", "!node_modules"],
    plugins: pluginConfigs,
    head: headConfigs,
    theme: hopeTheme(themeConfigs),
});
