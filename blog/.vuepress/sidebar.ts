import type { HopeThemeSidebarConfig } from "vuepress-theme-hope";

const sidebarConfigs: HopeThemeSidebarConfig = [
  {
    text: "小说",
    icon: "read",
    link: "/novels/",
    prefix: "/novels/",
    collapsable: true,
    children: ["undefined", "silent"],
  },
];

export default sidebarConfigs;
