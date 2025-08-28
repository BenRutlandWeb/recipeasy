<template>
  <img
    :src="src"
    :alt="alt"
    loading="lazy"
    width="360"
    height="360"
    class="shadow block w-full rounded dark:filter dark:brightness-75 dark:contrast-110"
  />
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
});
</script>