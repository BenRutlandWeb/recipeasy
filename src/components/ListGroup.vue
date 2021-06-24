<template>
  <component :is="tag" class="my-4 border rounded divide-y">
    <li
      v-for="item in items"
      :key="item"
      class="py-2 px-4 first:rounded-t-2xl last:rounded-b-2xl"
    >
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