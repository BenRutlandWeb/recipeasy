export default {
  data() {
    return {
      recipes: this.$store.getters.getRecipes(),
    };
  },
  computed: {
    exportRecipes() {
      return `data:application/json;base64,${btoa(
        unescape(encodeURIComponent(localStorage.getItem("recipes")))
      )}`;
    },
  },
  methods: {
    sortBy(key) {
      this.recipes.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        } else if (a[key] > b[key]) {
          return 1;
        } else {
          return 0;
        }
      });
    },
  },
  template: `
<div>
  <div class="p-2">
    <div class="flex align-center">
      <h1 class="mr-1">Recipes</h1>
      <app-button :to="{ name: 'AdminNewRecipe' }" variant="outline">
        <app-icon slot="start">add</app-icon>
        New Recipe
      </app-button>
      <a :href="exportRecipes" class="button button--outline ml-auto" download="Recipes">
        <app-icon slot="start">save_alt</app-icon>
        <span class="button__label">Export</span>
      </a>
    </div>
    <table>
      <thead>
        <tr>
          <th class="checkbox"><input type="checkbox" /></th>
          <th>
            <app-button @click="sortBy('title')" variant="ghost">
              Title
              <app-icon slot="end">sort_by_alpha</app-icon>
            </app-button>
          </th>
          <th>
            <app-button @click="sortBy('author')" variant="ghost">
              Author
              <app-icon slot="end">sort_by_alpha</app-icon>
            </app-button>
          </th>
          <th>Categories</th>
          <th>Tags</th>
          <th>
            <app-button @click="sortBy('timestamp')" variant="ghost">
              Date
              <app-icon slot="end">sort_by_alpha</app-icon>
            </app-button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in recipes" :key="recipe.slug">
          <td><input type="checkbox" /></td>
          <td>
            <b><router-link :to="{ name:'AdminEditRecipe', params: { slug: recipe.slug } }">{{ recipe.title }}</router-link></b>
            <br>
            <p class="options">
            <small>
            <router-link :to="{ name:'AdminEditRecipe', params: { slug: recipe.slug } }">Edit</router-link> |
            <router-link :to="{ name:'Recipe', params: { slug: recipe.slug } }">View</router-link>
            </small>
            </p>
          </td>
          <td>{{ recipe.author }}</td>
          <td>{{ recipe.categories.join(', ') }}</td>
          <td>{{ recipe.tags.join(', ') }}</td>
          <td><time :datetime="new Date(recipe.timestamp).toISOString()">{{ new Date(recipe.timestamp).toLocaleDateString() }}</time></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
};
