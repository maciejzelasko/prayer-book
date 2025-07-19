import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Prayer Book",
  description: "A digital prayer book for spiritual guidance and daily devotions",
  base: "/prayer-book/",
  lang: 'en-US',
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    pl: {
      label: 'Polski',
      lang: 'pl-PL',
      link: '/pl/'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Daily Office', link: '/daily-office/' },
      { text: 'Devotions', link: '/devotions/' }
    ],
    sidebar: [
      {
        text: 'Daily Office',
        items: [
          { text: 'Morning Prayer', link: '/daily-office/morning-prayer' },
          { text: 'Evening Prayer', link: '/daily-office/evening-prayer' },
          { text: 'Night Prayer (Compline)', link: '/daily-office/night-prayer' }
        ]
      },
      {
        text: 'Devotions',
        items: [
          { text: 'Rosary', link: '/devotions/rosary' },
          { text: 'Stations of the Cross', link: '/devotions/stations' },
          { text: 'Divine Mercy Chaplet', link: '/devotions/divine-mercy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/exodus90/prayer-book' }
    ],

    footer: {
      message: 'A resource for spiritual growth and prayer',
      copyright: 'Copyright © 2025 Prayer Book'
    }
  }
})
