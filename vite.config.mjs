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
                const files = fs.readdirSync(recipesDir).filter((f) => f.endsWith(".json"));

                function reduceWords(words) {
                    return words.filter((w, i, arr) => !arr.some((other, j) => i !== j && other.includes(w)));
                }

                function splitString(words) {
                    return words
                        .toLowerCase()
                        .split(/[^a-zA-Z]+/)
                        .filter(Boolean);
                }

                const manifest = files.map((f) => {
                    const content = JSON.parse(fs.readFileSync(path.join(recipesDir, f), "utf-8"));
                    const slug = f.replace(/\.json$/, "");

                    return {
                        slug,
                        title: content.title,
                        image: content.image,
                        search: reduceWords([
                            ...new Set([
                                ...splitString(content.title),
                                ...content.ingredients.map((i) => splitString(i.name)).flat(),
                                ...content.keywords.map((i) => splitString(i)).flat(),
                            ]),
                        ]),
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
