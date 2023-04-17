<template>
  <Layout>
    <template #header>
      <AppBar title="Recipeasy" />
    </template>

    <!--<RouterLink :to="{ name: 'toasties' }">Toasties</RouterLink>-->

    <template v-if="favouritedRecipes.length">
      <h2 class="mt-0">Your favourites</h2>
      <SliderGroup :items="favouritedRecipes">
        <template #default="{ item }">
          <RecipeCard :recipe="item" />
        </template>
      </SliderGroup>
    </template>

    <template v-if="recentlyViewedRecipes.length">
      <h2 :class="{ 'mt-0': !favouritedRecipes.length }">Recently viewed</h2>
      <SliderGroup :items="recentlyViewedRecipes">
        <template #default="{ item }">
          <RecipeCard :recipe="item" />
        </template>
      </SliderGroup>
    </template>

    <template v-if="recentlyAddedRecipes.length">
      <h2 :class="{ 'mt-0': !recentlyViewedRecipes.length }">Recently added</h2>
      <SliderGroup :items="recentlyAddedRecipes">
        <template #default="{ item }">
          <RecipeCard :recipe="item" />
        </template>
      </SliderGroup>
    </template>

    <h2>All recipes</h2>
    <ListGroup
      :items="recipes"
      class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <template #default="{ item }">
        <SmallRecipeCard :recipe="item" />
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

const recentlyViewedRecipes = recentKeys.map((name) => {
  return recipes.find((recipe) => recipe.name == name);
});
const recentlyAddedRecipes = recipes
  .sort((a, b) => b.meta.fileStats.birthtimeMs - a.meta.fileStats.birthtimeMs)
  .slice(0, 10);
</script>