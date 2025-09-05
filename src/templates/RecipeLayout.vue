<template>
  <AppHeader>
    <slot name="header">
      <RecipeAppBar />
    </slot>
  </AppHeader>
  <AppMain class="md:grid-cols-3 md:items-start">
    <slot />
  </AppMain>
  <ClientOnly>
    <CookModeToggle />
  </ClientOnly>
  <AppFooter />
</template>
