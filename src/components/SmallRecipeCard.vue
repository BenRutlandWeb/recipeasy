<script setup lang="ts">
import type { CompactListing, RecipeWithSlug } from '@/lib/recipes';
defineProps<{
  recipe: RecipeWithSlug | CompactListing;
}>();
const baseUrl = import.meta.env.BASE_URL;
</script>
<template>
  <a
    :href="`${baseUrl}recipes/${recipe.slug}/`"
    class="flex items-center rounded shadow dark:bg-gray-850"
  >
    <img
      :src="recipe.image"
      :alt="recipe.title"
      width="360"
      height="360"
      loading="lazy"
      decoding="async"
      class="block w-16 rounded-l dark:filter dark:brightness-75 dark:contrast-110"
    />
    <h3 class="line-clamp-2 text-base font-bold py-2 px-4">
      {{ recipe.title }}
    </h3>
  </a>
</template>
