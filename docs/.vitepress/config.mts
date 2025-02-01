import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'


// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  base: '/prayer-book/',
  title: "Tradycyjny modlitewnik katolicki",
  description: "***",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Modlitwy', link: '/prayers' },
    ],
  },
  locales: {
    root: {
      label: 'Polish',
      lang: 'pl'
    },
    fr: {
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en/index' // default /en/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    }
  },
  pwa: {}
}))
