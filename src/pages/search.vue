<template>
  <Layout>
    <template #header>
      <SearchAppBar />
    </template>

    <ListGroup
      :items="queriedRecipes"
      v-if="query && queriedRecipes.length"
      class="grid gap-6"
    >
      <template #default="{ item }">
        <RecipeCard :recipe="item" />
      </template>
    </ListGroup>

    <p v-else-if="query">No recipes found.</p>

    <div class="text-center grid gap-4" v-else>
      <div class="relative">
        <BaseIcon
          icon="search"
          class="w-64 h-64 mx-auto filter grayscale opacity-10"
        />
        <RecipeasyLogo
          class="w-16 h-16 mx-auto filter absolute top-18 left-28"
        />
      </div>
      <p class="text-2xl">Search Recipeasy</p>
    </div>
  </Layout>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const query = computed(() => useRoute().query.q || "");
const recipes = useRouter()
  .options.routes.filter((route) => route.path.startsWith("/recipes"))
  .reverse();

const queriedRecipes = computed(() => {
  return recipes.filter((recipe) => {
    const searchTerm = query.value.toLowerCase();
    const meta = recipe.meta;

    return (
      meta.title.toLowerCase().includes(searchTerm) ||
      meta.ingredients?.find((i) => i.toLowerCase().includes(searchTerm)) ||
      meta.keywords?.find((i) => i.toLowerCase().includes(searchTerm))
    );
  });
});
</script>