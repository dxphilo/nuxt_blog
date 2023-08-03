export default {
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
};
