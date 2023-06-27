import { DefaultTheme } from 'vitepress'
import navConfigs from './nav'
import footerConfigs from './footer'
import sidebarConfigs from './sidebar'

const themeConfigs: DefaultTheme.Config = {
    logo: '/assets/imgs/icons/avatar-1x.webp',
    nav: navConfigs,
    footer: footerConfigs,
    sidebar: sidebarConfigs,
}

export default themeConfigs
