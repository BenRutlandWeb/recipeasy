<template>
  <AppBarButton @click="share">
    <BaseIcon icon="share" />
  </AppBarButton>
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