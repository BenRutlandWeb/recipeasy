import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import components from "unplugin-vue-components/vite";
import path from "path";
import manifest from "./src/assets/manifest.json";
//import viteImagemin from "vite-plugin-imagemin";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminWebp from "imagemin-webp";
import IndexRecipes from "./src/IndexRecipes";
import GenerateWebp from "./src/GenerateWebp";

export default {
  base: "/recipeasy/",
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
    GenerateWebp(),
    /*
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
        },
      },
    }),
    */
    IndexRecipes(),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
};
