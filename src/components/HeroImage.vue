<template>
  <img :src="src" :alt="alt" class="hero" />
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    src: String,
    alt: String,
  });
</script>

<style>
  .hero {
    aspect-ratio: 2.39 / 1;
    object-fit: cover;
    width: 100%;
  }
</style>
