// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@invictus.codes/nuxt-vuetify",
    "@vueuse/nuxt",
  ],
  build: {
    transpile: ["vue-sonner"],
  },
  css: ["~/assets/css/solana.css"],
  vite: {
    esbuild: {
      target: "esnext",
    },
    build: {
      target: "esnext",
    },
    optimizeDeps: {
      include: [],
      esbuildOptions: {
        target: "esnext",
      },
    },
    define: {
      "process.env.BROWSER": true,
    },
  },
  ssr: false,
  runtimeConfig: {
    public: {
      appName: "Match",
      appContactEmail:
        process.env.MATCH_CONTACT_EMAIL || "kingsmen.hackers@gmail.com",
      pinataJWT: process.env.PINATA_JWT,
      contractId: process.env.CONTRACT_ID,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      polkadotRpcUrl: process.env.POLKADOT_RPC_URL,
    },
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
  },
});
