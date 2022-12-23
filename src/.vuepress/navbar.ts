import type { NavbarOptions } from 'vuepress-theme-hope'

const navbarOptions: NavbarOptions = [
    {
        text: '小说',
        icon: 'read',
        prefix: '/novels/',
        children: ['undefined', 'silent'],
    },
    {
        text: '友情链接',
        icon: 'link',
        link: '/links/',
    },
    {
        text: '留言板',
        icon: 'comment',
        link: '/comments/',
    },
    {
        text: '项目',
        icon: 'folder',
        children: [
            {
                text: 'RPE Guide',
                link: 'https://rpe.chinq.xyz',
            },
            {
                text: 'Todos!',
                link: 'https://todos.chinq.xyz',
            },
        ],
    },
    {
        text: '关于',
        link: '/about/',
        icon: 'like',
    },
]

export default navbarOptions
