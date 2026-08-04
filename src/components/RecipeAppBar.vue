<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
  },
});

const route = useRoute();
const router = useRouter();

const hasHistoryBack = computed(() => {
  // Depend on route so this recomputes as navigation changes.
  route.fullPath;
  return window.history.state?.back != null;
});

function goBack() {
  if (hasHistoryBack.value) {
    router.back();
    return;
  }

  router.push({ name: 'home' });
}
</script>

<template>
  <button type="button" class="rounded-full p-2 m-2 leading-3" aria-label="Go back" @click="goBack">
    <BaseIcon icon="arrow_back" />
  </button>
  <AppBarTitle>{{ title }}</AppBarTitle>
  <DarkModeToggle />
</template>
