<template>
  <button type="button" @click="toggle" v-if="hasScreenLock" :class="locked">
    {{ icon }}
  </button>
</template>

<script setup>
  import { computed, ref } from "vue";

  const hasScreenLock = ref(false);
  const isLocked = ref(false);

  if ("wakeLock" in navigator) {
    hasScreenLock.value = true;
  }

  const icon = computed(() => (isLocked.value ? "🖥️🔒" : "🖥️🔓"));

  const locked = computed(() => (isLocked.value ? "active" : ""));

  let wakeLock = null;

  if (hasScreenLock) {
    const handleVisibilityChange = () => {
      if (wakeLock !== null && document.visibilityState === "visible") {
        requestWakeLock();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
  }

  const requestWakeLock = async () => {
    try {
      wakeLock = await navigator.wakeLock.request("screen");
      isLocked.value = true;

      wakeLock.addEventListener("release", () => {
        isLocked.value = false;
      });
    } catch (err) {
      //
    }
  };

  function toggle() {
    if (!isLocked.value) {
      requestWakeLock();
    } else {
      wakeLock.release().then(() => {
        wakeLock = null;
        isLocked.value = false;
      });
    }
  }
</script>

<style>
  .active {
    background: green;
  }
</style>
