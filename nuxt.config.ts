export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
  ],
  css: ['@/assets/styles/global.css'],
  app: {
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      bodyAttrs: {
        class: 'overflow-x-hidden',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        // open graph social image
        { property: 'og:title', content: 'Magic Pen' },
        { property: 'og:description', content: 'Write Anything in seconds just like Magick. Powered by AI, let me be your intelligent writing assistant.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Magic Pen' },
      ],
    },
  },
})
