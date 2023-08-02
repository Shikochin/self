import { DefaultTheme } from 'vitepress'

const sidebarConfigs: DefaultTheme.SidebarMulti = {
    '/diary/': [
        {
            text: '日记',
            items: [
                {
                    text: '日记 #1',
                    link: '/diary/diary-1',
                },
            ],
        },
    ],
    '/essay/': [
        {
            text: '杂文',
            items: [
                {
                    text: '游戏计划 / Narrators',
                    link: '/essay/game-project-narrators',
                },
            ],
        },
    ],
}

export default sidebarConfigs
