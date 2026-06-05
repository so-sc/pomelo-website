import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import { fetchInstallScript } from "./scripts/fetchInstallScript.mjs";

export default defineConfig({
  integrations: [mdx(), fetchInstallScript()],
  vite: {
    plugins: [tailwindcss()],
  },
});
