// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
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
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
  },
})
