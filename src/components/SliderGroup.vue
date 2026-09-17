<template>
  <component
    :is="tag"
    class="[scrollbar-width:none] flex gap-6 overflow-auto px-6 pb-8 -mx-6 snap-x snap-mandatory"
  >
    <template v-for="(item, index) in items" :key="index">
      <li class="snap-start scroll-ms-6 flex-[0_0_min(360px,36vw)]" v-if="item">
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
