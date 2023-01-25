import { DefaultTheme } from 'vitepress'
import navConfigs from './nav'
import footerConfigs from './footer'

const themeConfigs: DefaultTheme.Config = {
    logo: '/assets/imgs/icons/avatar-1x.webp',
    nav: navConfigs,
    footer: footerConfigs,
}

export default themeConfigs
