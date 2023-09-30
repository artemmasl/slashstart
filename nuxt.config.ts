// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/scss/global.scss",
    "~/scss/fonts.scss",
    "~/scss/_typo.scss",
    "~/scss/_variables.scss",
  ],
  modules: ["@nuxtjs/device", "nuxt-swiper"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  server: {
    https: true,
  },
});
