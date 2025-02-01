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
      {
        text: 'Modlitwy',
        items: [
          { text: 'Codzienne', link: '/daily-prayers' },
          { text: 'Polskie', link: '/prayers' },
          { text: 'Łacińskie', link: '/latin-text' },
        ]
      },
      {
        text: 'Msza Święta',
        items: [
          { text: 'Sposoby słuchania cz. 1, 2', link: '/holy-mass-1-2.md' },
          { text: 'Sposoby słuchania cz. 3', link: '/holy-mass-3' },
        ]
      },
      {
        text: 'Nabożeństwa',
        items: [
          { text: '5 Pierwszych Sobót', link: '/5-1st-Sat-Devotion.md' },
        ]
      }
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
