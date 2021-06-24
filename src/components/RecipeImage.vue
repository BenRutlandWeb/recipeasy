<template>
  <img :src="src" loading="lazy" class="shadow block w-full mb-4 rounded" />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  src: String,
});
</script>