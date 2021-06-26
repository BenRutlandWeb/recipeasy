<template>
  <AppBarLink :to="{ name: 'home' }" aria-label="Go home">
    <RecipeasyLogo />
  </AppBarLink>
  <AppBarTitle>{{ title }}</AppBarTitle>
  <CookModeToggle />
  <FavouriteRecipeToggle />
  <DarkModeToggle />
</template>

<script setup>
import { useRoute } from "vue-router";

const title = useRoute().meta.title;
</script>