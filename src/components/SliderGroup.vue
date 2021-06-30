<template>
  <component :is="tag" class="slider-group flex overflow-auto px-6 pb-8 -mx-6">
    <li v-for="item in items" :key="item" class="slider-item">
      <slot :item="item">{{ item }}</slot>
    </li>
  </component>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Array,
  },
  tag: {
    type: String,
    default: "ul",
  },
});
</script>

<style scoped>
.slider-group {
  scroll-snap-type: x mandatory;
}
.slider-item {
  scroll-snap-align: start;
  scroll-margin-inline-start: 1.5rem;
  flex: 0 0 36vw;
}
</style>