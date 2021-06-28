<template>
  <RouterLink
    :to="{ name: recipe.name }"
    class="flex shadow rounded dark:shadow-2xl dark:bg-gray-850"
  >
    <img
      :src="recipe.meta.image"
      :alt="recipe.meta.title"
      width="640"
      height="360"
      loading="lazy"
      class="
        block
        w-16
        object-cover
        rounded-l
        dark:filter
        dark:brightness-75
        dark:contrast-110
      "
    />
    <div class="px-4 py-2">
      <h3 class="mb-2">{{ recipe.meta.title }}</h3>
      <RecipeChips :chips="recipe.meta.keywords.slice(0, 3)" />
    </div>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  recipe: {
    type: Object,
  },
});
</script>