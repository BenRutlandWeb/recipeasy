<template>
  <label class="theme-switch">
    <base-switch v-if="hasScreenLock" v-model="isLocked" />
    Cook mode
  </label>
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
</script>
