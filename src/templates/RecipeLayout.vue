<template>
  <AppHeader>
    <slot name="header">
      <RecipeAppBar />
    </slot>
  </AppHeader>

  <AppMain class="md:grid-cols-3 md:items-start">
    <div class="grid gap-6">
      <RecipeImage :src="$route.meta.image" :alt="$route.meta.title" />
      <RecipeActionButtons />
      <RecipeChips :chips="$route.meta.keywords" />
    </div>
    <div class="grid gap-6 md:col-span-2">
      <slot />
    </div>
  </AppMain>

  <CookModeToggle />

  <AppFooter />
</template>