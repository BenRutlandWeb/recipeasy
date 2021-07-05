<template>
  <button type="button" @click="share" aria-label="Share recipe">
    <BaseIcon icon="share" />
  </button>
</template>

<script setup>
async function share() {
  try {
    await navigator.share({ url: window.location.href });
  } catch {
    //
  }
}
</script>