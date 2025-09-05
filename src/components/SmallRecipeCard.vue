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
    class="flex items-center rounded shadow dark:bg-gray-850"
  >
    <img
      :src="recipe.image"
      alt=""
      width="360"
      height="360"
      loading="lazy"
      class="block w-16 rounded-l dark:filter dark:brightness-75 dark:contrast-110"
    />
    <h3 class="line-clamp-2 text-base font-bold py-2 px-4">
      {{ recipe.title }}
    </h3>
  </RouterLink>
</template>
