import fs from 'fs';
import path from 'path';
import { watch } from 'chokidar';

// Optimized word reduction to avoid O(N^2) string checks
function reduceWords(words) {
  return words.filter((w, i, arr) => !arr.some((other, j) => i !== j && other.includes(w)));
}

function splitString(words) {
  return words
    .toLowerCase()
    .split(/[^a-zA-Z]+/)
    .filter(Boolean);
}

function buildAll() {
  const recipesDir = path.resolve(__dirname, './data/recipes');
  const files = fs.readdirSync(recipesDir).filter((f) => f.endsWith('.json'));
  const slugs = files.map((f) => f.replace(/\.json$/, ''));
  const slugToId = new Map(slugs.map((slug, index) => [slug, index]));
  const recipeKeywordsById = new Map();

  const searchOutput = {};
  const listingsOutput = {};

  files.forEach((f) => {
    const slug = f.replace(/\.json$/, '');
    const recipeId = slugToId.get(slug); // Numeric ID

    const content = JSON.parse(fs.readFileSync(path.join(recipesDir, f), 'utf-8'));

    // Build Listing metadata
    listingsOutput[slug] = {
      title: content.title,
      image: content.image,
      id: recipeId,
    };

    // Extract search keywords
    const keywords = reduceWords([
      ...new Set([
        ...splitString(content.title),
        ...content.ingredients.map((i) => splitString(i.name)).flat(),
        ...content.keywords.map((i) => splitString(i)).flat(),
      ]),
    ]);
    recipeKeywordsById.set(recipeId, keywords);

    // Map keywords to Numeric IDs instead of Slugs
    keywords.forEach((word) => {
      if (!searchOutput[word]) {
        searchOutput[word] = [];
      }
      searchOutput[word].push(recipeId);
    });
  });

  // Reuse the existing token search index to generate related recipes by shared token score.
  slugs.forEach((slug, recipeId) => {
    const keywords = recipeKeywordsById.get(recipeId) || [];
    const candidateScores = new Map();

    keywords.forEach((word) => {
      const matches = searchOutput[word] || [];
      const weight = matches.length > 0 ? 1 / matches.length : 0;

      matches.forEach((candidateId) => {
        if (candidateId === recipeId) {
          return;
        }
        candidateScores.set(candidateId, (candidateScores.get(candidateId) || 0) + weight);
      });
    });

    const relatedIds = [...candidateScores.entries()]
      .sort((a, b) => b[1] - a[1] || a[0] - b[0])
      .slice(0, 6)
      .map(([candidateId]) => candidateId);

    listingsOutput[slug].related = relatedIds;
  });

  // Write 1: Search Index (keyword -> numeric ID array)
  fs.writeFileSync(
    path.resolve(__dirname, './data/recipes-search.json'),
    JSON.stringify(searchOutput)
  );

  // Write 2: Recipe Listings
  fs.writeFileSync(
    path.resolve(__dirname, './data/recipes.json'),
    JSON.stringify(listingsOutput, null, 2)
  );
}

export default function indexRecipes() {
  let watcher;

  return {
    name: 'recipes-manifest',
    buildStart() {
      watcher = watch(path.resolve(__dirname, './data/recipes'));

      watcher.on('add', () => buildAll());
      watcher.on('change', () => buildAll());
    },

    closeBundle() {
      watcher?.close();
    },
  };
}
