import { DefaultTheme } from 'vitepress'

const navConfigs: DefaultTheme.NavItem[] = [
    {
        text: '分类',
        items: [
            { text: '日记', link: '/diary/diary-1.md' },
            { text: '杂文', link: '/essay/game-project-narrators.md' },
        ],
    },
    {
        text: '友情链接',
        link: '/links',
    },
    {
        text: '留言板',
        link: '/comment',
    },
    {
        text: '项目',
        items: [
            { text: 'RPE Guide', link: 'https://rpe.cqberry.me' },
            { text: 'Todos!', link: 'https://todos.cqberry.me' },
        ],
    },
    {
        text: '关于',
        link: '/about',
    },
    {
        text: 'GitHub',
        link: 'https://github.com/CQBerry/self',
    },
]

export default navConfigs
