<template>
  <h1>{{ title }}</h1>
  <RouterLink :to="{ name: 'home' }" class="button" aria-label="go home">
    <BaseIcon>close</BaseIcon>
  </RouterLink>
</template>

<script setup>
import { useRoute } from "vue-router";

const title = useRoute().meta.title;
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  flex: 1;
  margin: 0 0 0 var(--gutter);
  font-weight: 400;
}
h1 div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.button {
  padding: 0.5rem;
  margin: 0.5rem;
  color: inherit;
  line-height: 0;
}
</style>
