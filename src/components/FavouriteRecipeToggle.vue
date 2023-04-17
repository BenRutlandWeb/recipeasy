<template>
  <button
    type="button"
    role="switch"
    @click="toggleFavourite"
    aria-label="Toggle favourite"
    :aria-checked="favourited ? 'true' : 'false'"
  >
    <BaseIcon
      :class="{ 'text-pink-600': favourited }"
      :icon="favourited ? 'favorite' : 'favorite_border'"
    />
  </button>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const recipes = JSON.parse(localStorage.getItem("favourites") ?? "{}");
const route = useRoute();

const favourited = ref(recipes[route.name]);

function toggleFavourite() {
  if (recipes[route.name]) {
    delete recipes[route.name];
    favourited.value = false;
  } else {
    recipes[route.name] = true;
    favourited.value = true;
  }

  localStorage.setItem("favourites", JSON.stringify(recipes));
}
</script>