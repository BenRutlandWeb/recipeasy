<template>
  <header class="header">
    <slot name="header">
      <SearchAppBar />
    </slot>
  </header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">
    <slot name="footer">© 2021 Ben Rutland Web</slot>
    <theme-switch />
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
    margin-block: 1rem;
  }

  .footer {
    text-align: center;
    padding: 1rem var(--gutter) 2rem;
    border-block-start: 1px solid var(--border);
  }
</style>
