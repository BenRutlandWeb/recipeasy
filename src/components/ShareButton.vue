<template>
  <button type="button" @click="share">
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