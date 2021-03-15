<template>
  <Layout>
    <template #header>
      <RecipeAppBar :title="recipe.name" />
    </template>

    <img v-if="recipe.image" :src="recipe.image" loading="lazy" class="img" />

    <div v-html="recipe.description"></div>

    <RecipeIngredients :html="recipe.ingredients" />

    <RecipeMethod :html="recipe.method" />
  </Layout>
</template>

<script setup>
  import { defineProps, ref } from "vue";

  const props = defineProps({
    slug: String,
  });

  const recipe = ref({});

  if (localStorage.getItem(props.slug)) {
    recipe.value = JSON.parse(localStorage.getItem(props.slug));
  } else {
    fetch(
      `https://benrutlandweb.co.uk/staging/7916/wp-json/api/recipes/${props.slug}`
    )
      .then((r) => r.json())
      .then((r) => (recipe.value = r))
      .then((r) => localStorage.setItem(props.slug, JSON.stringify(r)));
  }
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
