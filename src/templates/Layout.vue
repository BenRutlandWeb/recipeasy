<template>
  <header class="header">
    <slot name="header">
      <RecipeAppBar />
    </slot>
  </header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">
    <slot name="footer">© 2021 Ben Rutland Web</slot>
  </footer>
</template>

<style>
.header {
  position: sticky;
  top: 0;
  z-index: var(--header);
  background: var(--bg);

  box-shadow: 0 0 1rem rgb(0 0 0 / 25%);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main {
  margin-block: 1rem 8rem;
}

.footer {
  text-align: center;
  padding: 2rem var(--gutter);
  border-block-start: 1px solid var(--border);
}
</style>
