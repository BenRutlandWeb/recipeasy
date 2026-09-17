<template>
  <button
    type="button"
    role="checkbox"
    @click="toggleFavourite"
    aria-label="Toggle favourite"
    :aria-checked="favourited ? 'true' : 'false'"
  >
    <BaseIcon
      :class="{ 'text-pink-600': favourited }"
      :icon="favourited ? 'favorite' : 'favorite_border'"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStorage } from '@/composables/useStorage';
import BaseIcon from '@/components/BaseIcon.vue';

const props = defineProps<{
  slug: string;
}>();

const { all: favourites, toggle } = useStorage<string>('favourites');

const favourited = computed(() => favourites.value.includes(props.slug));

function toggleFavourite() {
  toggle(props.slug);
}
</script>
