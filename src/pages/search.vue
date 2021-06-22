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
        <ChipGroup class="chips">
          <BaseChip class="chip" v-for="tag in item.meta.keywords" :key="tag">
            {{ tag }}
          </BaseChip>
        </ChipGroup>
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
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
</style>
