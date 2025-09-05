<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <AppBarLink :to="{ name: 'home' }" aria-label="Go home">
    <BaseIcon icon="arrow_back" />
  </AppBarLink>
  <AppBarTitle>{{ title }}</AppBarTitle>
  <ClientOnly>
    <DarkModeToggle />
  </ClientOnly>
</template>
