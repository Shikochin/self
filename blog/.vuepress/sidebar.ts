import type { HopeThemeSidebarConfig } from "vuepress-theme-hope";

const sidebarConfig: HopeThemeSidebarConfig = [
    {
      text: '主页',
      icon: 'home',
      link: '/',  
    },
    {
        text: "小说",
        icon: 'book',
        link: '/novels/',
        prefix: "/novels/",
        collapsable: true,
        children: [
            'undefined', 'silent'
        ],
    },
]

export default sidebarConfig;