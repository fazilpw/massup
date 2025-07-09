// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://mass-up.vercel.app", // Cambia por tu dominio final
  compressHTML: true,
  build: {
    inlineStylesheets: "auto"
  }
});