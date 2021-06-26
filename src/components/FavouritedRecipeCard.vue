<template>
  <RouterLink
    :to="{ name: recipe.name }"
    class="block shadow rounded dark:shadow-2xl dark:bg-gray-850 relative"
  >
    <img
      :src="recipe.meta.image"
      :alt="recipe.meta.title"
      loading="lazy"
      class="
        block
        w-full
        aspect-ratio-32/9
        object-cover
        rounded-t
        dark:filter
        dark:brightness-75
        dark:contrast-110
      "
    />
    <BaseIcon class="absolute top-2 right-2 text-pink-500">favorite</BaseIcon>
    <div class="p-4">
      <h2 class="mt-0 mb-4">{{ recipe.meta.title }}</h2>
      <RecipeChips :chips="recipe.meta.keywords" />
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