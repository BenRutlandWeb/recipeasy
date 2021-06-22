<template>
  <RouterLink :to="{ name: 'home' }" class="button" aria-label="go home">
    <BaseIcon>arrow_back</BaseIcon>
  </RouterLink>
  <label for="app-search" class="sr-only"
    >Search by ingredient, dish, keyword...</label
  >
  <input
    type="search"
    id="app-search"
    placeholder="Ingredient, dish, keyword..."
    autocomplete="off"
    :value="query"
    @input="search"
    ref="appSearch"
  />
  <button
    type="button"
    @click="clear"
    v-if="query"
    class="button"
    aria-label="clear search"
  >
    <BaseIcon>close</BaseIcon>
  </button>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const query = computed(() => route.query.q || "");
const appSearch = ref(null);

function search({ target }) {
  router.push({
    name: "search",
    query: Object.assign({}, route.query, { q: target.value }),
  });
}
function clear({ target }) {
  const newQuery = Object.assign({}, route.query);
  delete newQuery.q;
  router.push({
    query: newQuery,
  });
  appSearch.value.focus();
}
onMounted(() => appSearch.value.focus());
</script>

<style scoped>
.link {
  line-height: 0;
}
.bar {
  display: grid;
  grid: auto / auto 1fr auto;
  align-items: center;
  box-shadow: 0 0 1rem rgb(0 0 0 / 10%);
}
.bar {
  position: sticky;
  top: 0;
  z-index: var(--header);
  background: var(--bg);
}
input[type="search"] {
  border: 0;
  background: none;
  font-size: 1.25rem;
  width: auto;
  flex: 1;
  display: block;
  padding: 0;
  color: inherit;
}
input[type="search"]:focus {
  outline: none;
}
.app-search:focus-within {
  border-color: red;
}

input[type="search"]::placeholder {
  color: var(--placeholder);
}
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}

.button {
  border: 0;
  background: none;
  padding: 0.5rem;
  margin: 0.5rem;
  color: inherit;
  line-height: 0;
}
</style>
