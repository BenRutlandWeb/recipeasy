import fs from "fs";
import path from "path";
import { watch } from "chokidar";

function reduceWords(words) {
  return words.filter(
    (w, i, arr) => !arr.some((other, j) => i !== j && other.includes(w))
  );
}

function splitString(words) {
  return words
    .toLowerCase()
    .split(/[^a-zA-Z]+/)
    .filter(Boolean);
}

function buildSearchIndex() {
  const recipesDir = path.resolve(__dirname, "./data/recipes");
  const files = fs.readdirSync(recipesDir).filter((f) => f.endsWith(".json"));

  const output = {};

  files.forEach((f) => {
    const content = JSON.parse(
      fs.readFileSync(path.join(recipesDir, f), "utf-8")
    );
    const slug = f.replace(/\.json$/, "");

    const keywords = reduceWords([
      ...new Set([
        ...splitString(content.title),
        ...content.ingredients.map((i) => splitString(i.name)).flat(),
        ...content.keywords.map((i) => splitString(i)).flat(),
      ]),
    ]);

    keywords.forEach((word) => {
      if (!output[word]) {
        output[word] = [];
      }

      output[word].push(slug);
    });
  });

  fs.writeFileSync(
    path.resolve(__dirname, "./data/recipes-search.json"),
    JSON.stringify(output, null, 2)
  );
}

function buildListings() {
  const recipesDir = path.resolve(__dirname, "./data/recipes");
  const files = fs.readdirSync(recipesDir).filter((f) => f.endsWith(".json"));

  const output = {};

  files.forEach((f) => {
    const content = JSON.parse(
      fs.readFileSync(path.join(recipesDir, f), "utf-8")
    );
    const slug = f.replace(/\.json$/, "");

    output[slug] = {
      title: content.title,
      image: content.image,
    };
  });

  fs.writeFileSync(
    path.resolve(__dirname, "./data/recipes.json"),
    JSON.stringify(output, null, 2)
  );
}

export default function indexRecipes() {
  let watcher;

  return {
    name: "recipes-manifest",
    buildStart() {
      watcher = watch(path.resolve(__dirname, "./data/recipes"));

      watcher.on("add", (file) => {
        buildListings();
        buildSearchIndex();
      });
      watcher.on("change", (file) => {
        buildListings();
        buildSearchIndex();
      });
    },

    closeBundle() {
      watcher?.close();
    },
  };
}
