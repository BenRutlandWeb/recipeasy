import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import components from "unplugin-vue-components/vite";
import path from "path";
import manifest from "./src/assets/manifest.json";
import IndexRecipes from "./src/IndexRecipes";

export default {
  base: "/recipeasy/",
  ssg: {
    base: "/recipeasy/",
  },
  plugins: [
    vue({
      pagesDir: "src/pages",
      include: [/\.vue$/],
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["*.jpg", "*.png", "*.svg"],
      manifest,
    }),
    components({
      dirs: ["src/components", "src/templates"],
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    IndexRecipes(),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
};
