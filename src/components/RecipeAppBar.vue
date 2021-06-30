<template>
  <AppBarLink :to="{ name: 'home' }" aria-label="Go home">
    <BaseIcon icon="arrow_back" />
  </AppBarLink>
  <AppBarTitle>{{ $route.meta.title }}</AppBarTitle>
  <DarkModeToggle />
</template>