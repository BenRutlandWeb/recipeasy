<template>
  <h1>{{ recipe.title }}</h1>

  <table v-if="recipe.meta">
    <thead>
      <tr>
        <th v-for="(meta, title) in recipe.meta" :key="title">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="(meta, title) in recipe.meta" :key="title">
          {{ meta }}
        </td>
      </tr>
    </tbody>
  </table>

  <h2>Ingredients</h2>
  <ul>
    <li v-for="ingredient in recipe.ingredients" :key="ingredient">
      {{ ingredient }}
    </li>
  </ul>

  <div class="method-title">
    <h2>Method</h2>
    <ScreenLock />
  </div>
  <ol>
    <li v-for="method in recipe.method" :key="method">
      {{ method }}
    </li>
  </ol>

  <div v-if="recipe.nutrition">
    <h2>Nutrition: {{ recipe.nutrition.label }}</h2>
    <table>
      <thead>
        <tr>
          <th v-for="(stat, title) in recipe.nutrition.stats" :key="title">
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="(stat, title) in recipe.nutrition.stats" :key="title">
            {{ stat }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import jsonRecipes from "@/api/recipes.json";
  import { defineProps } from "vue";

  const props = defineProps({
    slug: String,
  });

  const recipe = jsonRecipes.find((recipe) => recipe.slug == props.slug);
</script>

<style>
  .method-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
