<template>
  <h2>Ingredients</h2>
  <div class="ingredients">
    <slot />
  </div>
</template>

<style>
.ingredients ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
}
.ingredients ul li {
  padding: 0.5rem 1rem;
}
.ingredients ul li + li {
  border-top: 1px solid var(--border);
}
.ingredients ul li:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.ingredients ul li:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}
</style>
