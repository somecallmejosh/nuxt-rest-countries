// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
