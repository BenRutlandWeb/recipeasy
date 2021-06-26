<template>
  <Layout>
    <template #header>
      <AppBar title="Recipeasy" />
    </template>

    <template v-if="favouritedRecipes.length">
      <h2 class="mt-0">Your favourites</h2>
      <ListGroup :items="favouritedRecipes" class="grid gap-6">
        <template #default="{ item }">
          <FavouritedRecipeCard :recipe="item" />
        </template>
      </ListGroup>
    </template>

    <h2 :class="{ 'mt-0': !favouritedRecipes.length }">All recipes</h2>
    <ListGroup :items="recipes" class="grid gap-6">
      <template #default="{ item }">
        <RecipeCard :recipe="item" />
      </template>
    </ListGroup>
  </Layout>
</template>

<script setup>
import { useRouter } from "vue-router";

const favourited = JSON.parse(localStorage.getItem("favourites") ?? "{}");
const favouritedKeys = Object.keys(favourited);

const recipes = useRouter()
  .options.routes.filter((route) => route.path.startsWith("/recipes"))
  .reverse();

const favouritedRecipes = recipes.filter((recipe) => {
  return favouritedKeys.includes(recipe.name);
});
</script>