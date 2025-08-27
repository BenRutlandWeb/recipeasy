<template>
  <Layout>
    <template #header>
      <AppBar title="Recipeasy" />
    </template>

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
import recipes from "@/data/recipes-manifest.json";

const favourited = JSON.parse(localStorage.getItem("favourites") ?? "[]");

const favouritedRecipes = favourited.map((slug) => {
  return recipes.find((r) => r.slug === slug);
});

const recentlyViewed = JSON.parse(localStorage.getItem("recent") ?? "[]");

const recentlyViewedRecipes = recentlyViewed.map((slug) => {
  return recipes.find((r) => r.slug === slug);
});
</script>
