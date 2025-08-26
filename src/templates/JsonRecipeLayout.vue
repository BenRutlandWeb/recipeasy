<script setup>
import { init } from "@/composables/useRecipe";

const props = defineProps({
  recipe: Object,
});

init(props.recipe.serves);

//@todo change prepTime and cookTime to be 1h 30m
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
          <tr>
            <th class="text-start">Serves</th>
            <td><ServesInput /></td>
          </tr>
          <tr>
            <th class="text-start">Preparation time</th>
            <td>{{ recipe.prepTime }}</td>
          </tr>
          <tr>
            <th class="text-start">Cook time</th>
            <td>{{ recipe.cookTime }}</td>
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
