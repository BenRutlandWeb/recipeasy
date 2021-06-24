<template>
  <AppBarButton
    role="switch"
    :aria-checked="isDarkMode"
    aria-label="Toggle dark mode"
    @click="toggle"
  >
    <BaseIcon>{{ icon }}</BaseIcon>
  </AppBarButton>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";

const currentMode = ref(localStorage.getItem("prefers-color-scheme") == "dark");

const el = document.documentElement;

function updateState(dark) {
  const newScheme = dark ? "dark" : "no-preference";
  el.setAttribute("data-prefers-color-scheme", newScheme);
  el.classList.toggle("dark", dark);
  el.classList.toggle("light", !dark);
  localStorage.setItem("prefers-color-scheme", newScheme);
}

function toggle() {
  currentMode.value = !currentMode.value;
}

watch(currentMode, updateState);

onMounted(() => updateState(currentMode.value));

const icon = computed(() =>
  currentMode.value ? "brightness_7" : "brightness_4"
);

const isDarkMode = false;
</script>