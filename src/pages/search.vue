<template>
  <Layout>
    <template #header>
      <SearchAppBar />
    </template>

    <ListGroup
      :items="queriedRecipes"
      v-if="query && queriedRecipes.length"
      class="grid gap-6 content-start md:max-w-lg md:mx-auto w-full"
    >
      <template #default="{ item }">
        <SmallRecipeCard :recipe="item" />
      </template>
    </ListGroup>

    <p v-else-if="query">No recipes found.</p>

    <div class="text-center grid gap-4" v-else>
      <BaseIcon icon="search" class="w-64 h-64 mx-auto text-gray-100" />

      <p class="text-2xl">Search Recipeasy</p>
    </div>
  </Layout>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import recipes from '@/data/recipes.json';
import searchIndex from '@/data/recipes-search.json';

const route = useRoute();
const query = computed(() => (route.query.q || '').trim());
const idToSlug = Object.fromEntries(
  Object.entries(recipes).map(([slug, recipe]) => [recipe.id, slug])
);

function search() {
  const searchWords = query.value
    .toLowerCase()
    .split(/[^a-zA-Z]+/)
    .filter(Boolean);

  if (searchWords.length === 0) return [];

  // Map each query word to a Set of matching Recipe IDs
  const wordMatches = searchWords.map((q) => {
    const matchedIds = new Set();

    // Check index keys for substring matches (e.g., query "chick" matches index key "chicken")
    for (const [keyword, ids] of Object.entries(searchIndex)) {
      if (keyword.includes(q)) {
        ids.forEach((id) => matchedIds.add(id));
      }
    }

    return matchedIds;
  });

  // If any typed word yields zero matches, the AND query fails entirely
  if (wordMatches.some((set) => set.size === 0)) {
    return [];
  }

  // Intersect sets (recipes must match ALL query terms)
  // Optimization: Start intersecting with the smallest set first
  wordMatches.sort((a, b) => a.size - b.size);

  let intersectedIds = Array.from(wordMatches[0]);

  for (let i = 1; i < wordMatches.length; i++) {
    const currentSet = wordMatches[i];
    intersectedIds = intersectedIds.filter((id) => currentSet.has(id));
  }

  return intersectedIds;
}

const queriedRecipes = computed(() => {
  const matchedIds = search();

  // O(1) direct lookup: ID -> Slug -> Recipe metadata
  return matchedIds
    .map((id) => {
      const slug = idToSlug[id];
      return recipes[slug] ? { slug, ...recipes[slug] } : null;
    })
    .filter(Boolean);
});
</script>
