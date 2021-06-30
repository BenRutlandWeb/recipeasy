<template>
  <img
    :src="src"
    loading="lazy"
    width="360"
    height="360"
    class="
      shadow
      block
      w-full
      rounded
      dark:filter
      dark:brightness-75
      dark:contrast-110
    "
  />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  src: String,
});
</script>