<template>
  <span class="chip">
    <slot />
  </span>
</template>

<style>
.chip {
  background: var(--chip);
  border-radius: 0.25rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.875rem;
}
</style>
