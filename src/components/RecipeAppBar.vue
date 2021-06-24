<template>
  <AppBarLink :to="{ name: 'home' }" aria-label="Go home">
    <RecipeasyLogo />
  </AppBarLink>
  <AppBarTitle>Recipeasy</AppBarTitle>
  <CookModeToggle />
  <DarkModeToggle />
</template>

<script setup>
import { useRoute } from "vue-router";

const title = useRoute().meta.title;
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  flex: 1;
  font-weight: 400;
}
.mr-auto {
  margin-inline-end: auto;
}
</style>
