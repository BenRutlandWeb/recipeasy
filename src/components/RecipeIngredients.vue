<template>
  <h2>Ingredients</h2>
  <ListGroup :items="ingredients" />
</template>
<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    ingredients: Array,
  });
</script>
