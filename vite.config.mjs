import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import components from "unplugin-vue-components/vite";
import path from "path";
import manifest from "./src/assets/manifest.json";
import viteImagemin from "vite-plugin-imagemin";
import fs from "fs";

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
    viteImagemin({
      mozjpeg: {
        quality: 66,
      },
    }),
    //@todo make into a plugin or remove the need to a manifest
    {
      name: "recipes-manifest",
      buildStart() {
        const recipesDir = path.resolve(__dirname, "src/data/recipes");
        const files = fs
          .readdirSync(recipesDir)
          .filter((f) => f.endsWith(".json"));

        const manifest = files.map((f) => {
          const content = JSON.parse(
            fs.readFileSync(path.join(recipesDir, f), "utf-8")
          );
          const slug = f.replace(/\.json$/, "");
          // pick only meta fields (adjust as needed)
          return {
            slug,
            title: content.title,
            image: content.image,
            ingredients: content.ingredients.map((i) => i.name),
            keywords: content.keywords,
          };
        });

        fs.writeFileSync(
          path.resolve(__dirname, "src/data/recipes-manifest.json"),
          JSON.stringify(manifest, null, 2)
        );
      },
    },
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
};
