import vue from "@vitejs/plugin-vue";
import markdown from "vite-plugin-md";
import { VitePWA as pwa } from "vite-plugin-pwa";
import router from "vite-plugin-voie";
import components from "vite-plugin-components";
import path from "path";
import manifest from "./src/assets/manifest.json";

export default {
  plugins: [
    vue({
      pagesDir: "src/pages",
      include: [/\.vue$/, /\.md$/],
    }),
    markdown(),
    pwa({
      manifest,
    }),
    router({
      extensions: ["vue", "md"],
    }),
    components({
      extensions: ["vue", "md"],
      customLoaderMatcher: (path) => path.endsWith(".md"),
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
};
