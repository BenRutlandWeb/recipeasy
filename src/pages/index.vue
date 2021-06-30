<template>
  <Layout>
    <template #header>
      <AppBar title="Recipeasy" />
    </template>

    <template v-if="favouritedRecipes.length">
      <h2 class="mt-0">Your favourites</h2>
      <SliderGroup :items="favouritedRecipes">
        <template #default="{ item }">
          <SmallRecipeCard :recipe="item" />
        </template>
      </SliderGroup>
    </template>

    <template v-if="recentRecipes.length">
      <h2 :class="{ 'mt-0': !favouritedRecipes.length }">Recently viewed</h2>
      <SliderGroup :items="recentRecipes">
        <template #default="{ item }">
          <SmallRecipeCard :recipe="item" />
        </template>
      </SliderGroup>
    </template>

    <h2>All recipes</h2>
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

const recentKeys = JSON.parse(localStorage.getItem("recent") ?? "[]");

const recipes = useRouter()
  .options.routes.filter((route) => route.path.startsWith("/recipes"))
  .reverse();

const favouritedRecipes = recipes.filter((recipe) => {
  return favouritedKeys.includes(recipe.name);
});

const recentRecipes = recentKeys.map((name) => {
  return recipes.find((recipe) => recipe.name == name);
});
</script>