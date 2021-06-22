<template>
  <img :src="src" loading="lazy" class="recipe-img" />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  src: String,
});
</script>

<style>
.recipe-img {
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
