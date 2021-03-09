<template>
  <Layout>
    <ListGroup v-if="queriedRecipes.length" :items="queriedRecipes">
      <template #default="{ item }">
        <!-- <li v-for="recipe in queriedRecipes" :key="recipe.slug">-->
        <RouterLink
          :to="{ name: 'recipe', params: { slug: item.slug } }"
          class="recipe-card"
        >
          {{ item.title }}
        </RouterLink>
        <!--</li>-->
      </template>
    </ListGroup>
    <div class="list" v-else>
      <p>No recipes found</p>
    </div>
  </Layout>
</template>

<script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import jsonRecipes from "@/api/recipes.json";

  const query = computed(() => useRoute().query.q || "");

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
