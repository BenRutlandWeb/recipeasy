<template>
  <RecipeasyLogo class="m-4" />
  <AppBarTitle>{{ title }}</AppBarTitle>
  <AppBarLink :to="{ name: 'search' }" aria-label="Search">
    <BaseIcon icon="search" />
  </AppBarLink>
  <DarkModeToggle />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>