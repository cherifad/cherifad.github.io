// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ["types"],
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-icon"],
  tailwindcss: {
    exposeConfig: true,
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  css: ["~/assets/css/style.css"],
  ssr: false,
});
