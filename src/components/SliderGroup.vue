<template>
  <component :is="tag" class="slider-group flex overflow-auto px-6 pb-8 -mx-6">
    <template v-for="item in items">
      <li :key="item" class="slider-item" v-if="item">
        <slot :item="item">{{ item }}</slot>
      </li>
    </template>
  </component>
</template>

<script setup>
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
  scrollbar-width: none;
}
.slider-item {
  scroll-snap-align: start;
  scroll-margin-inline-start: 1.5rem;
  flex: 0 0 min(360px, 36vw);
}
</style>
