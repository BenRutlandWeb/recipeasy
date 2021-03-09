<template>
  <div class="method-title">
    <h2>Method</h2>
    <ScreenLock />
  </div>
  <ol class="method">
    <li v-for="step in steps" :key="step">
      {{ step }}
    </li>
  </ol>
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    steps: Array,
  });
</script>

<style>
  .method-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .method {
    font-size: 1.25rem;
    display: grid;
    gap: 4rem;
    padding: 0;
    margin: 0;
    list-style: none;
    counter-reset: step;
  }
  .method li {
    counter-increment: step;
  }
  .method li::before {
    content: counter(step) ".";
    display: block;
    font-size: 2rem;
    opacity: 0.5;
  }
</style>
