<template>
  <RecipeasyLogo class="m-4" />
  <AppBarTitle>{{ title }}</AppBarTitle>
  <AppBarLink :to="{ name: 'search' }" aria-label="Search">
    <BaseIcon icon="search" />
  </AppBarLink>
  <ClientOnly>
    <DarkModeToggle />
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>