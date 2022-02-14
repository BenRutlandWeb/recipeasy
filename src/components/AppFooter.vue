<template>
  <footer class="text-center py-8 px-6 border-t dark:border-gray-700">
    <slot>© 2021 - {{ currentYear }} Ben Rutland Web</slot>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>