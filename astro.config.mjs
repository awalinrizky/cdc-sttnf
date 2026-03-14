import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://cdc-sttnf.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [sitemap()],
  redirects: {
    "/jobs": "/lowongan",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});