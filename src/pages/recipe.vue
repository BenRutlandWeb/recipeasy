<script setup>
import { init } from "@/composables/useRecipe";
import { formatMinutes } from "@/utils/time";

const props = defineProps({
    recipe: {
        type: Object,
    },
});

init(props.recipe.serves);
</script>

<template>
    <RecipeLayout>
        <template #header>
            <RecipeAppBar :title="recipe.title" />
        </template>

        <div class="grid gap-6">
            <RecipeImage :src="recipe.image" :alt="recipe.title" />
            <RecipeActionButtons />
            <RecipeChips :chips="recipe.keywords" />
        </div>
        <div class="grid gap-6 md:col-span-2">
            <h1>{{ recipe.title }}</h1>

            <div v-html="recipe.description"></div>

            <table>
                <tbody>
                    <tr class="h-10">
                        <th class="text-start">Serves</th>
                        <td><ServesInput /></td>
                    </tr>
                    <tr class="h-10">
                        <th class="text-start">Total time</th>
                        <th class="text-start">
                            {{ formatMinutes(recipe.prepTime + recipe.cookTime) }}
                        </th>
                    </tr>
                    <tr class="h-10">
                        <th class="text-start font-normal">Preparation time</th>
                        <td>{{ formatMinutes(recipe.prepTime) }}</td>
                    </tr>
                    <tr class="h-10">
                        <th class="text-start font-normal">Cook time</th>
                        <td>{{ formatMinutes(recipe.cookTime) }}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Ingredients</h2>

            <ul>
                <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
                    <Ingredient :quantity="ingredient.quantity" :unit="ingredient.unit">
                        {{ ingredient.name }}
                        <span v-if="ingredient.description" class="block text-base text-gray-500 dark:text-gray-400">
                            {{ ingredient.description }}
                        </span>
                    </Ingredient>
                </li>
            </ul>

            <h2>Method</h2>

            <ol>
                <li v-for="method in recipe.methods" :key="method">
                    <Method>{{ method }}</Method>
                </li>
            </ol>
        </div>
    </RecipeLayout>
</template>
