import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

const sidebarConfigs: HopeThemeSidebarArrayConfig = [
    {
        text: "小说",
        icon: "read",
        link: "/novels/",
        prefix: "/novels/",
        collapsible:true,
        children: ["undefined", "silent"],
    },
];

export default sidebarConfigs;
