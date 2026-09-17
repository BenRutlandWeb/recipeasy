<script setup>
import FavouriteRecipeToggle from '@/components/FavouriteRecipeToggle.vue';
import ShareButton from '@/components/ShareButton.vue';
defineProps({
  slug: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="flex border divide-x rounded dark:border-gray-700 dark:divide-gray-700">
    <FavouriteRecipeToggle :slug="slug" class="flex-1 text-center p-2" />
    <ShareButton class="flex-1 text-center p-2" />
  </div>
</template>
