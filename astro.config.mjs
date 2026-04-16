import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: "https://cdc-sttnf.vercel.app",
  output: "server", // (Dari static ke server)
  adapter: vercel(),
  integrations: [sitemap()],
  redirects: {
    "/jobs": "/lowongan",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});