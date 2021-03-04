<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <footer>&copy; 2021 Ben Rutland Web</footer>
</template>

<script setup>
  import Navbar from "@/components/Navbar.vue";
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    background: var(--bg);
    color: var(--text);
  }
  main {
    flex: 1;
  }
</style>
