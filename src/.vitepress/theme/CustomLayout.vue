<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
import { watch } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = DefaultTheme

const { isDark } = useData()

const route = useRoute()

watch(() => route.path, () => {
    const giscus = document.querySelector("#VPContent > div > div > div.content > div > giscus-widget")
    if (giscus) {
        const iframe = giscus.shadowRoot!.querySelector("iframe")
        iframe?.contentWindow?.postMessage(
            { giscus: { setConfig: { term: route.path.substring(1) } } },
            'https://giscus.app',
        )
    }
})
</script>

<template>
    <Layout>
        <!-- Comment -->
        <template #doc-after>
            <Giscus repo="CQBerry/self" repoId="R_kgDOHzsJjA" category="Comments" categoryId="DIC_kwDOHzsJjM4CSnTe"
                strict="1" mapping="pathname" :theme="isDark ? 'dark_dimmed' : 'light_tritanopia'" loading="lazy">
            </Giscus>
        </template>
    </Layout>
</template>