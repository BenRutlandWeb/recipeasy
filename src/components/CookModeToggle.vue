<template>
  <AppBarButton
    role="switch"
    :class="{ active: isLocked }"
    :aria-checked="isDarkMode"
    aria-label="Toggle cook mode"
    @click="toggle"
    v-if="hasScreenLock"
  >
    <BaseIcon>outdoor_grill</BaseIcon>
  </AppBarButton>
</template>

<script setup>
import { ref, watch } from "vue";

const hasScreenLock = "wakeLock" in navigator;
const isLocked = ref(false);

if (hasScreenLock) {
  let wakeLock = null;

  async function updateState(shouldLock) {
    if (shouldLock) {
      try {
        wakeLock = await navigator.wakeLock.request("screen");

        wakeLock.addEventListener("release", () => {
          isLocked.value = false;
        });
      } catch (err) {
        isLocked.value = false;
      }
    } else {
      wakeLock.release().then(() => (wakeLock = null));
    }
  }

  watch(isLocked, updateState);

  document.addEventListener("visibilitychange", () => {
    if (wakeLock !== null && document.visibilityState === "visible") {
      isLocked.value = true;
    }
  });
}

function toggle() {
  isLocked.value = !isLocked.value;
}
</script>

<style scoped>
button.active {
  background: linear-gradient(
    315deg,
    var(--brand-primary),
    var(--brand-secondary)
  );
  color: var(--brand-secondary-text);
}
</style>
