<template>
  <div class="method-title">
    <h2>Method</h2>
    <ScreenLock />
  </div>
  <div v-html="html" class="method"></div>
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    html: String,
  });
</script>

<style>
  .method-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .method ol {
    font-size: 1.25rem;
    display: grid;
    gap: 4rem;
    padding: 0;
    margin: 0;
    list-style: none;
    counter-reset: step;
  }
  .method ol li {
    counter-increment: step;
  }
  .method ol li::before {
    content: counter(step) ".";
    display: block;
    font-size: 2rem;
    opacity: 0.5;
  }
</style>
