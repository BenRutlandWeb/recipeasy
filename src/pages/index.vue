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
