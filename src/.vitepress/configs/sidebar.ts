import { DefaultTheme } from 'vitepress'

const sidebarConfigs: DefaultTheme.SidebarMulti = {
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
