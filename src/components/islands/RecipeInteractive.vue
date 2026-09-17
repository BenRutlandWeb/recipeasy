<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { provideRecipeState } from '@/composables/useRecipe';
import { formatMinutes } from '@/utils/time';
import { trackRecent } from '@/lib/trackRecent';
import type { Ingredient as IngredientItem } from '@/lib/recipes';
import ServesInput from '@/components/ServesInput.vue';
import Ingredient from '@/components/Ingredient.vue';
import Method from '@/components/Method.vue';

const props = defineProps<{
  slug: string;
  serves: number;
  prepTime: number;
  cookTime: number;
  ingredients: IngredientItem[];
  methods: string[];
}>();

provideRecipeState(props.slug, props.serves);

const totalTime = computed(() => props.prepTime + props.cookTime);

onMounted(() => {
  trackRecent(props.slug);
});
</script>

<template>
  <table>
    <tbody>
      <tr class="border-b border-t border-dotted dark:border-gray-800 h-10">
        <th class="text-start py-1">Serves</th>
        <td class="py-1"><ServesInput /></td>
      </tr>
      <tr class="border-b border-t border-dotted dark:border-gray-800 h-10">
        <th class="text-start py-1">Total time</th>
        <td class="py-1">{{ formatMinutes(totalTime) }}</td>
      </tr>
      <tr class="border-b border-t border-dotted dark:border-gray-800 h-10">
        <th class="text-start font-normal py-1">Preparation time</th>
        <td class="py-1">{{ formatMinutes(prepTime) }}</td>
      </tr>
      <tr class="border-b border-t border-dotted dark:border-gray-800 h-10">
        <th class="text-start font-normal py-1">Cook time</th>
        <td class="py-1">{{ formatMinutes(cookTime) }}</td>
      </tr>
    </tbody>
  </table>

  <h2 class="text-xl font-semibold mt-8">Ingredients</h2>

  <ul class="text-lg grid gap-6">
    <li v-for="ingredient in ingredients" :key="ingredient.name">
      <Ingredient :name="ingredient.name" :quantity="ingredient.quantity" :unit="ingredient.unit">
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
    <li v-for="(method, index) in methods" :key="`${index}-${method}`" class="relative">
      <Method :step-key="`${index}`">{{ method }}</Method>
    </li>
  </ol>
</template>
