<template>
  <Layout>
    <template #header>
      <RecipeAppBar :title="recipe.title" />
    </template>

    <img
      v-if="recipe.image"
      :src="recipe.image.src"
      :width="recipe.image.width"
      :height="recipe.image.height"
      loading="lazy"
      class="img"
    />

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

    <RecipeIngredients :ingredients="recipe.ingredients" />

    <RecipeMethod :steps="recipe.method" />

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
  </Layout>
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
  .img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    margin: 0 0 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 15%);
  }
</style>
