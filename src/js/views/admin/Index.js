export default {
  template: `
<div class="app-shell">
  <header>
    <app-button :to="{ name: 'Home' }" variant="ghost">
      <app-icon slot="start">home</app-icon>
    </app-button>
    <app-button :to="{ name: 'AdminNewRecipe' }" variant="ghost">
      <app-icon slot="start">add</app-icon>
      New Recipe
    </app-button>
    <app-button :to="{name:'Recipe', params: { slug: $route.params.slug }}" variant="ghost" external v-if="$route.params.slug">
      <app-icon slot="start">exit_to_app</app-icon>
      View recipe
    </app-button>
  </header>
  <aside>
    <app-button :to="{ name: 'AdminRecipes' }" variant="ghost">
      <app-icon slot="start">kitchen</app-icon>
      Recipes
    </app-button>
  </aside>
  <main>
    <router-view />
  </main>
</div>
`,
};
