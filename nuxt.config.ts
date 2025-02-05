// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Rest Countries',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/fonts',
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'light',
    storage: 'localStorage',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  image: {
    providers: {
      myProvider: {
        name: 'flagCdn', // optional value to overrider provider name
        provider: '~/providers/image-provider.ts', // Path to custom provider
        options: {
          baseURL: '',
        },
      },
    },
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
  },
})
