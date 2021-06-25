<template>
  <Layout>
    <template #header>
      <AppBar title="Recipeasy" />
    </template>

    <ListGroup :items="recipes" class="grid gap-6">
      <template #default="{ item }">
        <RecipeCard :recipe="item" />
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