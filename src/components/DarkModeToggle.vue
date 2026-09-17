<template>
  <AppBarButton
    role="switch"
    :aria-checked="isDarkMode ? 'true' : 'false'"
    aria-label="Toggle dark mode"
    @click="toggle"
  >
    <BaseIcon :icon="icon" />
  </AppBarButton>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue';
import AppBarButton from '@/components/AppBarButton.vue';
import BaseIcon from '@/components/BaseIcon.vue';

const currentMode = ref(false);

function getInitialDarkMode() {
  const stored = localStorage.getItem('prefers-color-scheme');

  if (stored === 'dark') {
    return true;
  }

  if (stored === 'light') {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateState(dark: boolean) {
  const el = document.documentElement;
  const scheme = dark ? 'dark' : 'light';
  el.setAttribute('data-prefers-color-scheme', scheme);
  el.classList.toggle('dark', dark);
  el.classList.toggle('light', !dark);
  localStorage.setItem('prefers-color-scheme', scheme);
}

function toggle() {
  currentMode.value = !currentMode.value;
}

watch(currentMode, updateState);

onMounted(() => {
  currentMode.value = getInitialDarkMode();
  updateState(currentMode.value);
});

const icon = computed(() => (currentMode.value ? 'brightness_7' : 'brightness_4'));
const isDarkMode = computed(() => currentMode.value);
</script>
