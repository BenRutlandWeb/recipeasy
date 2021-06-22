<template>
  <label class="theme-switch">
    <BaseSwitch v-model="currentMode" />
    Dark mode
  </label>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const currentMode = ref(localStorage.getItem("prefers-color-scheme") == "dark");

const el = document.documentElement;

function updateState(dark) {
  const newScheme = dark ? "dark" : "no-preference";
  el.setAttribute("data-prefers-color-scheme", newScheme);
  localStorage.setItem("prefers-color-scheme", newScheme);
}

watch(currentMode, updateState);

onMounted(() => updateState(currentMode.value));
</script>

<style>
.theme-switch {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
