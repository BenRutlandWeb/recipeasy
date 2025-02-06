import vue from "@vitejs/plugin-vue";
import markdown from "unplugin-vue-markdown/vite";
import { VitePWA } from "vite-plugin-pwa";
import Pages from "vite-plugin-pages";
import components from "unplugin-vue-components/vite";
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
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
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
