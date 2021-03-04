<template>
  <ul class="list">
    <li v-for="recipe in recipes" :key="recipe.path">
      <RouterLink :to="recipe.path" class="recipe-card">
        <h2>{{ recipe.title }}</h2>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup>
  import routes from "voie-pages";

  function kebabToTitle(str) {
    return str
      .split("-")
      .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join(" ");
  }

  const recipes = routes
    .filter((route) => route.path !== "/")
    .map((route) => {
      route.title = kebabToTitle(route.name);
      return route;
    });
</script>

<style>
  .list {
    display: grid;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .recipe-card {
    display: flex;
    gap: 1rem;
  }
  .recipe-card img {
    width: 8rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 0.5rem;
  }
</style>
