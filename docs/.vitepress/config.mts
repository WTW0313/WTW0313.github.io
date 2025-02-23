import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Matcha Time",
  description: "一些技术分享和生活随想",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about-me/' },
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/WTW0313' },
    ],
    footer: {
      copyright: '© 2025 WTW0313 Powered by <a href="https://vitepress.dev/" style="text-decoration: none;">VitePress</a>'
    }
  }
})
