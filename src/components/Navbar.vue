<template>
  <header>
    <nav>
      <RouterLink to="/">Recipeasy</RouterLink>
    </nav>
    <ThemeSwitch />
  </header>
</template>

<script setup></script>

<style>
  header {
    position: sticky;
    box-shadow: 0 0 1rem rgb(0 0 0 / 10%);
    top: 0;
    z-index: 1;
    background: var(--bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav {
    display: flex;
    padding: 0.5rem 1rem;
  }
  nav ul {
    display: flex;
  }
</style>
