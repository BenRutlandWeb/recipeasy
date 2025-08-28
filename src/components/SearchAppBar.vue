<template>
  <AppBarButton @click="$router.back()" aria-label="Go home">
    <BaseIcon icon="arrow_back" />
  </AppBarButton>
  <label for="app-search" class="sr-only">
    Search by ingredient, dish, keyword...
  </label>
  <input
    type="search"
    id="app-search"
    placeholder="Ingredient, dish, keyword..."
    autocomplete="off"
    :value="query"
    @input="search"
    ref="appSearch"
    class="text-xl flex-1 placeholder-gray-500 focus:outline-none bg-transparent"
  />
  <AppBarButton @click="clear" v-if="query" aria-label="clear search">
    <BaseIcon icon="close" />
  </AppBarButton>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const query = computed(() => route.query.q || "");
const appSearch = ref(null);

function search({ target }) {
  router.replace({
    name: "search",
    query: Object.assign({}, route.query, { q: target.value }),
  });
}
function clear({ target }) {
  const newQuery = Object.assign({}, route.query);
  delete newQuery.q;
  router.replace({
    query: newQuery,
  });
  appSearch.value.focus();
}
onMounted(() => appSearch.value.focus());
</script>
