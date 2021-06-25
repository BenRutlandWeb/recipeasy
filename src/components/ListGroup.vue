<template>
  <component :is="tag">
    <li v-for="item in items" :key="item">
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