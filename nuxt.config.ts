// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  tailwindcss: {
    exposeConfig: true
  },
});
