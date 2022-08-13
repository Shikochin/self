import type { HopeThemeNavbarConfig } from "vuepress-theme-hope";

const navbarConfigs: HopeThemeNavbarConfig = [
    {
        text: "主页",
        link: "/",
        icon: "home",
    },
    {
        text: "小说",
        icon: "book",
        prefix: '/novels/',
        children: ["undefined", "silent"],
    },
    {
        text: "友情链接",
        icon: "link",
        link: '/links/',
    },
    {
        text: "留言板",
        icon: "comment",
        link: '/comments/',
    },
    {
        text: "项目",
        icon: "cubes",
        children: [{
            text: "RPE Guide",
            link: 'https://rpe.chinq.xyz',
        },],
    },
];

export default navbarConfigs;