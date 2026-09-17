<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ListGroup from '@/components/ListGroup.vue';
import SmallRecipeCard from '@/components/SmallRecipeCard.vue';
import BaseIcon from '@/components/BaseIcon.vue';
import AppBarButton from '@/components/AppBarButton.vue';
import { searchListings, type CompactListing, type SearchIndex } from '@/lib/search';

const props = defineProps<{
  searchIndex: SearchIndex;
  listings: CompactListing[];
}>();

function readQueryFromUrl() {
  return (new URLSearchParams(window.location.search).get('q') || '').trim();
}

const query = ref(import.meta.env.SSR ? '' : readQueryFromUrl());
const appSearch = ref<HTMLInputElement | null>(null);

function updateUrl(value: string) {
  const url = new URL(window.location.href);

  if (value) {
    url.searchParams.set('q', value);
  } else {
    url.searchParams.delete('q');
  }

  history.replaceState({}, '', url);
  query.value = value;
}

function search(event: Event) {
  updateUrl((event.target as HTMLInputElement).value);
}

function clear() {
  updateUrl('');
  appSearch.value?.focus();
}

const queriedRecipes = computed(() =>
  searchListings(query.value, props.searchIndex, props.listings)
);

onMounted(() => {
  appSearch.value = document.getElementById('app-search') as HTMLInputElement | null;
  query.value = readQueryFromUrl();

  if (appSearch.value) {
    appSearch.value.value = query.value;
    appSearch.value.addEventListener('input', search);
  }

  appSearch.value?.focus();
  window.addEventListener('popstate', syncQueryFromUrl);
});

onUnmounted(() => {
  appSearch.value?.removeEventListener('input', search);
  window.removeEventListener('popstate', syncQueryFromUrl);
});

function syncQueryFromUrl() {
  query.value = readQueryFromUrl();
  if (appSearch.value) {
    appSearch.value.value = query.value;
  }
}
</script>

<template>
  <Teleport to="#app-search-clear">
    <AppBarButton v-if="query" @click="clear" aria-label="Clear search">
      <BaseIcon icon="close" />
    </AppBarButton>
  </Teleport>

  <ListGroup
    v-if="query && queriedRecipes.length"
    :items="queriedRecipes"
    class="grid gap-6 content-start md:max-w-lg md:mx-auto w-full"
  >
    <template #default="{ item }">
      <SmallRecipeCard :recipe="item" />
    </template>
  </ListGroup>

  <p v-else-if="query">No recipes found.</p>

  <div v-else class="text-center grid gap-4">
    <BaseIcon icon="search" class="w-64 h-64 mx-auto text-gray-100" />
    <p class="text-2xl">Search Recipeasy</p>
  </div>
</template>
