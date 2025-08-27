<script setup>
import { useRoute } from "vue-router";
import { init } from "@/composables/useRecipe";
import { formatMinutes } from "@/utils/time";

const route = useRoute();

const recipes = import.meta.glob("/src/data/recipes/*.json");

const loader = recipes[`/src/data/recipes/${route.params.slug}.json`];

const recipe = await loader();

init(recipe.serves);
</script>

<template>
  <AppHeader>
    <slot name="header">
      <AppBarLink :to="{ name: 'home' }" aria-label="Go home">
        <BaseIcon icon="arrow_back" />
      </AppBarLink>
      <AppBarTitle>{{ recipe.title }}</AppBarTitle>
      <DarkModeToggle />
    </slot>
  </AppHeader>

  <AppMain class="md:grid-cols-3 md:items-start">
    <div class="grid gap-6">
      <RecipeImage :src="recipe.image" :alt="recipe.title" />
      <RecipeActionButtons />
      <RecipeChips :chips="recipe.keywords" />
    </div>
    <div class="grid gap-6 md:col-span-2">
      <h1>{{ recipe.title }}</h1>

      <p>{{ recipe.description }}</p>

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
  </AppMain>

  <CookModeToggle />

  <AppFooter />
</template>
