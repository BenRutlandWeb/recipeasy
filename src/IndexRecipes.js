import fs from "fs";
import path from "path";

function reduceWords(words) {
    return words.filter((w, i, arr) => !arr.some((other, j) => i !== j && other.includes(w)));
}

function splitString(words) {
    return words
        .toLowerCase()
        .split(/[^a-zA-Z]+/)
        .filter(Boolean);
}

export default function indexRecipes() {
    return {
        name: "recipes-manifest",
        buildStart() {
            const recipesDir = path.resolve(__dirname, "./data/recipes");
            const files = fs.readdirSync(recipesDir).filter((f) => f.endsWith(".json"));

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
                path.resolve(__dirname, "./data/recipes-manifest.json"),
                JSON.stringify(manifest, null, 2)
            );
        },
    };
}
