<template>
  <Layout>
    <template #header>
      <SearchAppBar />
    </template>

    <ListGroup :items="queriedRecipes" v-if="queriedRecipes.length">
      <template #default="{ item }">
        <RouterLink :to="{ name: item.name }" class="recipe-card">
          {{ item.meta.title }}
        </RouterLink>
      </template>
    </ListGroup>

    <div class="list" v-else>
      <p>No recipes found</p>
    </div>
  </Layout>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const query = computed(() => useRoute().query.q || "");
const recipes = useRouter().options.routes.filter((route) =>
  route.path.startsWith("/recipes")
);

const queriedRecipes = computed(() => {
  return recipes.filter((recipe) => {
    return recipe.meta.title.toLowerCase().includes(query.value.toLowerCase());
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
