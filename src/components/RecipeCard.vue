<template>
  <RouterLink
    :to="{ name: recipe.name }"
    class="block shadow rounded border border-white dark:border-gray-800"
  >
    <img
      :src="recipe.meta.image"
      :alt="recipe.meta.title"
      loading="lazy"
      class="
        block
        w-full
        rounded-t
        dark:filter
        dark:brightness-75
        dark:contrast-110
      "
    />
    <div class="p-4">
      <h2 class="mt-0 mb-4">{{ recipe.meta.title }}</h2>
      <ChipGroup>
        <BaseChip v-for="tag in recipe.meta.keywords" :key="tag">
          {{ tag }}
        </BaseChip>
      </ChipGroup>
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