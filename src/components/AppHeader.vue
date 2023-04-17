<template>
  <header
    class="
      sticky
      top-0
      z-50
      shadow
      bg-white
      border-b border-white
      dark:bg-gray-900
      dark:border-gray-700
    "
  >
    <div class="max-w-screen-lg mx-auto flex justify-between items-center">
      <slot />
    </div>
  </header>
</template>