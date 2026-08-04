<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStorage } from '@/composables/useStorage';

const { all: favourites, toggle } = useStorage('favourites');

const route = useRoute();

const slug = computed(() => route.meta.slug);

const favourited = computed(() => favourites.value.includes(slug.value));

function toggleFavourite() {
  toggle(slug.value);
}
</script>

<template>
  <button
    type="button"
    role="switch"
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
