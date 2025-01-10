import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/prayer-book/',
  title: "Tradycyjny modlitewnik katolicki",
  description: "***",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Nawigacja',
        items: [
          { text: 'Modlitwy codzienne', link: 'daily-prayers' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
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
})
