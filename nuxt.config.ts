// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", 'nuxt-icon'],
  tailwindcss: {
    exposeConfig: true,
  },
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "fr",
        iso: "fr",
        name: "Français",
        file: "fr.json",
      },
    ],
    defaultLocale: "fr",
  },
  css: ["~/assets/css/style.css"],
});
