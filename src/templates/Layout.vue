<template>
  <AppHeader>
    <slot name="header">
      <AppBar />
    </slot>
  </AppHeader>
  <AppMain>
    <slot />
  </AppMain>
  <AppFooter />
</template>