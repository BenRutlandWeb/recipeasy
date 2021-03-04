<template>
  <button type="button" @click="toggle" class="toggle">
    {{ icon }}
  </button>
</template>

<script setup>
  import { computed, ref } from "vue";

  const mode = localStorage.getItem("prefers-color-scheme") || "no-preference";

  const currentState = ref(mode);

  const el = document.documentElement;

  function updateState(mode) {
    currentState.value = mode;
    el.dataset.prefersColorScheme = mode;
    localStorage.setItem("prefers-color-scheme", mode);
  }

  updateState(currentState.value);

  function toggle() {
    const newMode = currentState.value == "dark" ? "no-preference" : "dark";

    updateState(newMode);
  }
  const icon = computed(() => (currentState.value !== "dark" ? "🌜" : "💡"));
</script>

<style>
  .toggle {
    background: none;
    border: 0;
    padding: 1rem;
    margin: 0.25rem;
    width: 3.5rem;
  }
</style>
