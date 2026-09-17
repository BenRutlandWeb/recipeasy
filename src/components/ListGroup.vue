<template>
  <component :is="tag">
    <template v-for="(item, index) in items" :key="index">
      <li v-if="item">
        <slot :item="item">{{ item }}</slot>
      </li>
    </template>
  </component>
</template>
<script setup lang="ts" generic="T">
withDefaults(
  defineProps<{
    items: T[];
    tag?: string;
  }>(),
  {
    tag: 'ul',
  }
);
</script>
