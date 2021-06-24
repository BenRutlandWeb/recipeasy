<template>
  <button
    type="button"
    role="switch"
    class="
      bg-white
      text-gray-700
      border-2 border-gray-200
      dark:bg-gray-900
      dark:text-gray-300
      dark:border-gray-500
      fixed
      bottom-6
      right-6
      rounded-full
      py-3
      pl-4
      pr-6
      shadow-lg
      z-50
      leading-3
      flex
      gap-2
      items-center
    "
    :class="{ 'border-pink-600': isLocked }"
    aria-label="Toggle cook mode"
    v-if="hasScreenLock"
    @click="toggle"
  >
    <div
      v-if="isLocked"
      class="w-4 h-4 rounded-full bg-pink-600 absolute top-0 right-0"
    ></div>
    <div
      v-if="isLocked"
      class="
        w-4
        h-4
        rounded-full
        bg-pink-600
        absolute
        top-0
        right-0
        animate-ping
      "
    ></div>
    <BaseIcon>outdoor_grill</BaseIcon>
    Cook mode
  </button>
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