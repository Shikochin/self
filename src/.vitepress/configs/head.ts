import { HeadConfig } from 'vitepress'

const headConfigs: HeadConfig[] = [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#10b981' }],
    ['link', { rel: 'icon', href: '/assets/imgs/icons/favicon-192x192.png' }],
    [
        'link',
        {
            rel: 'apple-touch-icon',
            href: '/assets/imgs/icons/favicon-192x192.png',
        },
    ],
]

export default headConfigs
