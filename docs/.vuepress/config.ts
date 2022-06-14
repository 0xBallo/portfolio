import { defineUserConfig } from 'vuepress'
import { useCustomTheme } from './theme'

export default defineUserConfig({
  lang: 'en-US',
  title: 'My Portfolio',
  description: '0xBallo portfolio',
  base: '/portfolio/',
  theme: useCustomTheme({}),
})