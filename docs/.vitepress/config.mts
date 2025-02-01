import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';
import { loadEnv } from 'vite';

// Manually get the mode from `process.env.NODE_ENV` or default to 'development'
const mode = process.env.NODE_ENV || 'development';

// Load environment variables
const env = loadEnv(mode, process.cwd());

// Export the configuration
export default withPwa(
  defineConfig({
    base: env.VITE_BASE_URL || '/prayer-book/',
    title: env.VITE_SITE_TITLE || 'Tradycyjny modlitewnik katolicki',
    description: env.VITE_SITE_DESCRIPTION || '***',
    themeConfig: {
      nav: [{ text: 'Home', link: '/' }],
      sidebar: [
        {
          text: 'Nawigacja',
          items: [{ text: 'Modlitwy codzienne', link: 'daily-prayers' }]
        }
      ],
      socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
    },
    locales: {
      root: {
        label: 'Polish',
        lang: 'pl'
      },
      fr: {
        label: 'English',
        lang: 'en',
        link: '/en/index'
      }
    },
    pwa: {}
  })
);
