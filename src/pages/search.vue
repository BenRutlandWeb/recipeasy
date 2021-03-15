<template>
  <Layout>
    <ListGroup v-if="queriedRecipes.length" :items="queriedRecipes">
      <template #default="{ item }">
        <!-- <li v-for="recipe in queriedRecipes" :key="recipe.slug">-->
        <RouterLink
          :to="{ name: 'recipe', params: { slug: item.slug } }"
          class="recipe-card"
        >
          {{ item.name }}
        </RouterLink>
        <!--</li>-->
      </template>
    </ListGroup>
    <div class="list" v-else>
      <p>No recipes found</p>
    </div>
  </Layout>
</template>

<script setup>
  import { computed, ref } from "vue";
  import { useRoute } from "vue-router";

  const query = computed(() => useRoute().query.q || "");

  const recipes = ref([]);

  if (sessionStorage.getItem("recipes")) {
    recipes.value = JSON.parse(sessionStorage.getItem("recipes"));
  } else {
    fetch(`https://benrutlandweb.co.uk/wp-json/api/recipes`)
      .then((r) => r.json())
      .then((r) => r.recipes)
      .then((r) => r.sort((a, b) => a.name.localeCompare(b.name)))
      .then((r) => (recipes.value = r))
      .then((r) => sessionStorage.setItem("recipes", JSON.stringify(r)));
  }

  const queriedRecipes = computed(() => {
    return recipes.value.filter((recipe) => {
      const q = query.value.toLowerCase();

      let titleMatches = recipe.name.toLowerCase().includes(q);

      // let ingredientMatches = recipe.ingredients.filter((ingredient) =>
      //   ingredient.name.toLowerCase().includes(q)
      // ).length;

      return titleMatches; // || ingredientMatches;
    });
  });
</script>

<style>
  .list {
    display: grid;
    gap: 1rem;
    list-style: none;
    padding: 1rem 0;
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
