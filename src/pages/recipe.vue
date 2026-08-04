<script setup>
import { computed } from 'vue';
import { init } from '@/composables/useRecipe';
import { formatMinutes } from '@/utils/time';
import recipes from '@/data/recipes.json';

const props = defineProps({
  recipe: {
    type: Object,
  },
});

init(props.recipe.serves);

const idToSlug = Object.fromEntries(
  Object.entries(recipes).map(([slug, recipe]) => [recipe.id, slug])
);

const relatedRecipes = computed(() => {
  const relatedIds = recipes[props.recipe?.slug]?.related || [];

  return relatedIds
    .map((id) => {
      const slug = idToSlug[id];
      return recipes[slug] ? { slug, ...recipes[slug] } : null;
    })
    .filter(Boolean);
});
</script>

<template>
  <RecipeLayout>
    <template #header>
      <RecipeAppBar :title="recipe.title" />
    </template>

    <div class="grid gap-6">
      <RecipeImage :src="recipe.image" :slug="recipe.slug" />
      <RecipeActionButtons />
      <RecipeChips :chips="recipe.keywords" />
    </div>
    <div class="grid gap-6 md:col-span-2">
      <h1 class="text-2xl font-semibold">{{ recipe.title }}</h1>

      <div>{{ recipe.description }}</div>

      <table>
        <tbody>
          <tr class="border-b border-t border-dotted dark:border-gray-800 h-10">
            <th class="text-start py-1">Serves</th>
            <td class="py-1"><ServesInput /></td>
          </tr>
          <tr class="border-b border-t border-dotted dark:border-gray-800 h-10">
            <th class="text-start py-1">Total time</th>
            <th class="text-start py-1">
              {{ formatMinutes(recipe.prepTime + recipe.cookTime) }}
            </th>
          </tr>
          <tr class="border-b border-t border-dotted dark:border-gray-800 h-10">
            <th class="text-start font-normal py-1">Preparation time</th>
            <td class="py-1">{{ formatMinutes(recipe.prepTime) }}</td>
          </tr>
          <tr class="border-b border-t border-dotted dark:border-gray-800 h-10">
            <th class="text-start font-normal py-1">Cook time</th>
            <td class="py-1">{{ formatMinutes(recipe.cookTime) }}</td>
          </tr>
        </tbody>
      </table>

      <h2 class="text-xl font-semibold mt-8">Ingredients</h2>

      <ul class="text-lg grid gap-6">
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
          <Ingredient :quantity="ingredient.quantity" :unit="ingredient.unit">
            {{ ingredient.name }}
            <span
              v-if="ingredient.description"
              class="block text-base text-gray-500 dark:text-gray-400"
            >
              {{ ingredient.description }}
            </span>
          </Ingredient>
        </li>
      </ul>

      <h2 class="text-xl font-semibold mt-8">Method</h2>

      <ol class="text-xl grid gap-16">
        <li v-for="method in recipe.methods" :key="method" class="relative">
          <Method>{{ method }}</Method>
        </li>
      </ol>
    </div>
    <template v-if="relatedRecipes.length">
      <div class="grid gap-6 md:col-span-3">
        <h2 class="text-xl font-semibold mt-8">Related recipes</h2>
        <ListGroup :items="relatedRecipes" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <template #default="{ item }">
            <SmallRecipeCard :recipe="item" />
          </template>
        </ListGroup>
      </div>
    </template>
  </RecipeLayout>
</template>
