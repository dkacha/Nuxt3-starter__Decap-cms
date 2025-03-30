// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/image'],
  ssr: true,
  compatibilityDate: '2025-09-02',
  devtools: { enabled: true },
  app: {

    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'cs',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Atelier Genesis je pražské architektonické studio. Zabýváme se kompletní paletou projekčních prací od přípravy samotné zakázky až po realizaci prováděcí dokumentace stavby a následný autorský dozor.' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap' },
      ],
    },
  },
  experimental: {
    appManifest: false,
    defaults: {
      nuxtLink: {
        trailingSlash: 'append'
      }
    }
  },
})