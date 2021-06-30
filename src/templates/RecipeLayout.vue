<template>
  <AppHeader>
    <slot name="header">
      <RecipeAppBar />
    </slot>
  </AppHeader>
  <AppMain>
    <RecipeImage :src="$route.meta.image" :alt="$route.meta.title" />

    <RecipeActionButtons />

    <RecipeChips :chips="$route.meta.keywords" />

    <slot />
  </AppMain>

  <CookModeToggle />

  <AppFooter />
</template>