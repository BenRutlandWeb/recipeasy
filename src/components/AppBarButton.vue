<template>
  <button type="button" class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  border: 0;
  border-radius: 50%;
  background: none;
  padding: 0.5rem;
  margin: 0.5rem;
  color: inherit;
  line-height: 0;
}
</style>
