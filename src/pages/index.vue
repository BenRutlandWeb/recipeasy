<template>
  <input
    type="search"
    v-model="query"
    placeholder="Search by name or ingredient..."
  />
  <ul class="list" v-if="queriedRecipes.length">
    <li v-for="recipe in queriedRecipes" :key="recipe.slug">
      <RouterLink :to="recipe.slug" class="recipe-card">
        {{ recipe.title }}
      </RouterLink>
    </li>
  </ul>
  <div class="list" v-else>
    <p>No recipes found</p>
  </div>
</template>

<script setup>
  import { computed, ref } from "vue";
  import jsonRecipes from "@/api/recipes.json";

  const query = ref("");

  const recipes = jsonRecipes.sort((a, b) => a.title.localeCompare(b.title));

  const queriedRecipes = computed(() => {
    return recipes.filter((recipe) => {
      const q = query.value.toLowerCase();

      let titleMatches = recipe.title.toLowerCase().includes(q);

      let ingredientMatches = recipe.ingredients.filter((ingredient) =>
        ingredient.toLowerCase().includes(q)
      ).length;

      return titleMatches || ingredientMatches;
    });
  });
</script>

<style>
  .list {
    display: grid;
    gap: 1rem;
    list-style: none;
    padding: 1rem 0;
    margin: 0;
  }
  .recipe-card {
    display: flex;
    gap: 1rem;
  }
  .recipe-card img {
    width: 8rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 0.5rem;
  }
</style>
