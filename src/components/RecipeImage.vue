<template>
  <img
    :src="src"
    loading="lazy"
    class="
      shadow
      block
      w-full
      rounded
      aspect-ratio-1/1
      object-cover
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