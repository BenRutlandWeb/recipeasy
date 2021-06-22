import vue from "@vitejs/plugin-vue";
import markdown from "vite-plugin-md";
import { VitePWA as pwa } from "vite-plugin-pwa";
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
    pwa({
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
        quality: 75,
      },
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
};
