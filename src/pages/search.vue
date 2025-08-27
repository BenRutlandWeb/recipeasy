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
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import recipes from "@/data/recipes-manifest.json";

const route = useRoute();
const query = computed(() => route.query.q || "");
//@todo remove this
const __recipes = useRouter()
  .options.routes.filter((route) => route.path.startsWith("/recipes"))
  .reverse();

const queriedRecipes = computed(() => {
  return recipes.filter((recipe) => {
    const searchTerm = query.value.toLowerCase();
    const meta = recipe.meta;
    //@todo remove old obj search
    return (
      meta.title.toLowerCase().includes(searchTerm) ||
      meta.ingredients?.find((i) => {
        const x = typeof i === "string" ? i : i.name;
        return x.toLowerCase().includes(searchTerm);
      }) ||
      meta.keywords?.find((i) => i.toLowerCase().includes(searchTerm))
    );
  });
});
</script>
