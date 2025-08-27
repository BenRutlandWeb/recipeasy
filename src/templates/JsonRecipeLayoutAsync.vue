<script setup>
import { init } from "@/composables/useRecipe";
import { useRoute } from "vue-router";

const route = useRoute();

const recipes = import.meta.glob("/src/data/recipes/*.json");

const loader = recipes[`/src/data/recipes/${route.params.slug}.json`];

const recipe = await loader();

init(recipe.serves);
</script>

<template>
  <JsonRecipeLayout :recipe="recipe" />
</template>
