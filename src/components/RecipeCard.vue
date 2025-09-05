<script setup>
const props = defineProps({
  recipe: {
    type: Object,
  },
});
</script>

<template>
  <RouterLink
    :to="{ name: 'recipes-' + recipe.slug }"
    class="block h-full shadow rounded dark:shadow-xl dark:bg-gray-850 relative"
  >
    <img
      :src="recipe.image"
      :alt="recipe.title"
      width="640"
      height="360"
      loading="lazy"
      class="block w-full h-auto aspect-ratio-1/1 object-cover rounded-t dark:filter dark:brightness-75 dark:contrast-110"
    />
    <div class="p-2">
      <h3 class="truncate-2 text-sm font-bold">
        {{ recipe.title }}
      </h3>
    </div>
  </RouterLink>
</template>
