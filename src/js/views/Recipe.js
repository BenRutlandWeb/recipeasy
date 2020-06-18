export default {
  data() {
    return {
      recipe: {},
    };
  },
  created() {
    this.recipe = this.$store.getters.getRecipe(this.$route.params.slug);
  },
  template: `
<div>
  <header>
    <router-link :to="{ name: 'Home' }">Recipe Blog Site</router-link>
    <router-link :to="{ name: 'Admin' }" v-if="$store.state.loggedIn">Dashboard</router-link>

  </header>
  <div class="content">
    <div class="img-16-9">
      <img :src="recipe.featuredImage" v-if="recipe.featuredImage" class="img-fluid mt-1" />
    </div>
    <h1>{{ recipe.title }}</h1>
    <div class="content p-0" v-if="recipe">{{recipe.description}}</div>
    <h2>Ingredients</h2>
    <ul>
      <li v-for="ingredient of recipe.ingredients">
        {{ ingredient.quantity }} {{ ingredient.unit }} {{ ingredient.name }} {{ ingredient.preparation }}
      </li>
    </ul>
    <h2>Method</h2>
    <ol>
      <li v-for="instruction of recipe.instructions">
        {{ instruction.text }}
      </li>
    </ol>
  </div>
</div>
`,
};
