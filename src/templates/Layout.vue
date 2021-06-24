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
      <slot name="header">
        <RecipeAppBar />
      </slot>
    </div>
  </header>
  <main
    class="mt-8 mb-32 w-full max-w-screen-md mx-auto px-6 flex-1 grid gap-6"
  >
    <slot />
  </main>
  <footer class="text-center py-8 px-6 border-t dark:border-gray-700">
    <slot name="footer">© 2021 Ben Rutland Web</slot>
  </footer>
</template>