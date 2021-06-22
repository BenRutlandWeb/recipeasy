<template>
  <RecipeasyLogo />
  <h1>{{ title }}</h1>
  <RouterLink :to="{ name: 'search' }" class="button">
    <BaseIcon>search</BaseIcon>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  flex: 1;
  margin: 0;
  font-weight: 400;
}
.button {
  padding: 0.5rem;
  margin: 0.5rem;
  color: inherit;
  line-height: 0;
}
</style>
