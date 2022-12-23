import type { SidebarArrayOptions } from 'vuepress-theme-hope'

const sidebarOptions: SidebarArrayOptions = [
    {
        text: '小说',
        icon: 'read',
        link: '/novels/',
        prefix: '/novels/',
        collapsible: true,
        children: ['undefined', 'silent'],
    },
]

export default sidebarOptions
