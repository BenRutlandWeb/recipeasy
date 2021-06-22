<template>
  <Layout>
    <template #header>
      <AppBar title="Recipeasy" />
    </template>

    <ListGroup :items="recipes">
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
  </Layout>
</template>

<script setup>
import { useRouter } from "vue-router";

const recipes = useRouter().options.routes.filter((route) =>
  route.path.startsWith("/recipes")
);
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