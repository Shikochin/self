import DefaultTheme from 'vitepress/theme'
// @ts-expect-error
import CustomLayout from './CustomLayout.vue'
import '../style/default.css'

export default {
    ...DefaultTheme,
    Layout: CustomLayout,
}
