import vue from "@vitejs/plugin-vue";
import markdown from "vite-plugin-md";
import { VitePWA } from "vite-plugin-pwa";
import Pages from "vite-plugin-pages";
import components from "vite-plugin-components";
import path from "path";
import manifest from "./src/assets/manifest.json";
import viteImagemin from "vite-plugin-imagemin";

export default {
  base: "/recipeasy/",
  plugins: [
    vue({
      pagesDir: "src/pages",
      include: [/\.vue$/, /\.md$/],
    }),
    markdown(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["*.jpg", "*.png", "*.svg"],
      manifest,
    }),
    Pages({
      extensions: ["vue", "md"],
      import: "sync",
    }),
    components({
      dirs: ["src/components", "src/templates"],
      extensions: ["vue", "md"],
      customLoaderMatcher: (path) => path.endsWith(".md"),
    }),
    viteImagemin({
      mozjpeg: {
        quality: 66,
      },
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
};
