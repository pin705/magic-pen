export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      feedbackURL: process.env.FEEDBACK_URL,
    },
  },
  nitro: {
    plugins: [
      '~/server/index.ts',
    ],
  },
  googleFonts: {
    families: {
      Nunito: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@kevinmarrec/nuxt-pwa',
  ],
  css: ['@/assets/styles/global.css'],
  app: {
    // buildAssetsDir: '/assets/',
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      bodyAttrs: {
        class: 'overflow-x-hidden',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      ],
      meta: [
        {
          name: 'copyright',
          content: 'Dytr',
        },
      ],
    },
  },
  pwa: {
    manifest: {
      name: 'Dyrt',
      short_name: 'Dyrt',
      start_url: '/',
      lang: 'en',
    },
    meta: {
      title: 'Dyrt - Best AI Writer, Content Generator & Writing Assistant',
      favicon: true,
      theme_color: '#FFFFFF',
      mobileApp: true,
      mobileAppIOS: true,
      author: 'Dyrt',
      ogSiteName: 'Dyrt',
      description: 'Write Anything in seconds just like Magick. Powered by AI, let me be your intelligent writing assistant.',
    },
  },
})
