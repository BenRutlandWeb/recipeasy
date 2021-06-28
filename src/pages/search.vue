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

    <div class="grid justify-center text-center" v-else>
      <RecipeasyLogo class="w-16 h-16" />
      <p>Search Recipeasy</p>
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