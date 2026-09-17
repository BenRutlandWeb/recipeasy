<script setup lang="ts">
import { computed } from 'vue';
import { useStorage } from '@/composables/useStorage';
import type { RecipeWithSlug } from '@/lib/recipes';
import SliderGroup from '@/components/SliderGroup.vue';
import RecipeCard from '@/components/RecipeCard.vue';

const props = defineProps<{
  recipes: RecipeWithSlug[];
}>();

const { all: favourited } = useStorage<string>('favourites', [], { immediate: true });
const { all: recent } = useStorage<string>('recent', [], { immediate: true });

const favouritedRecipes = computed(() =>
  favourited.value
    .map((slug) => props.recipes.find((recipe) => recipe.slug === slug))
    .filter((recipe): recipe is RecipeWithSlug => recipe !== undefined)
);

const recentlyViewedRecipes = computed(() =>
  recent.value
    .map((slug) => props.recipes.find((recipe) => recipe.slug === slug))
    .filter((recipe): recipe is RecipeWithSlug => recipe !== undefined)
);
</script>

<template>
  <div class="contents">
    <template v-if="favouritedRecipes.length">
      <h2 class="text-xl font-semibold">Your favourites</h2>
      <SliderGroup :items="favouritedRecipes">
        <template #default="{ item }">
          <RecipeCard :recipe="item" />
        </template>
      </SliderGroup>
    </template>

    <template v-if="recentlyViewedRecipes.length">
      <h2 class="text-xl font-semibold">Recently viewed</h2>
      <SliderGroup :items="recentlyViewedRecipes">
        <template #default="{ item }">
          <RecipeCard :recipe="item" />
        </template>
      </SliderGroup>
    </template>
  </div>
</template>
