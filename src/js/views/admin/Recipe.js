import { Ingredient } from "app/Models/Ingredient.js";
import { Instruction } from "app/Models/Instruction.js";

import slugify from "app/utils/slugify.js";
import isValidURL from "app/utils/isValidURL.js";

import { UNITS } from "app/includes/units.js";
import { PREPARATION } from "app/includes/preparation.js";

export default {
  data() {
    return {
      recipe: {
        title: "",
        description: "",
        featuredImage: "",
        ingredients: [],
        instructions: [],
        author: "Ben Rutland",
        categories: [],
        tags: [],
      },
      units: UNITS,
      preparation: PREPARATION,
    };
  },
  computed: {
    slug() {
      return slugify(this.recipe.title);
    },
    featuredImageURL() {
      return isValidURL(this.recipe.featuredImage);
    },
  },
  methods: {
    addIngredient() {
      this.recipe.ingredients.push(new Ingredient());
    },
    removeIngredient(ingredient) {
      this.recipe.ingredients.splice(
        this.recipe.ingredients.indexOf(ingredient),
        1
      );
    },
    addInstruction() {
      this.recipe.instructions.push(new Instruction());
    },
    removeInstruction(instruction) {
      this.recipe.instructions.splice(
        this.recipe.instructions.indexOf(instruction),
        1
      );
    },
    saveRecipe() {
      if (!this.recipe.title) return;
      this.recipe.timestamp = Date.now();
      this.recipe.slug = this.slug;
      this.$store.commit("updateRecipe", this.recipe);
      this.$router.push({
        name: "AdminEditRecipe",
        params: { slug: this.slug },
      });
    },
    deleteRecipe() {
      this.$store.commit("deleteRecipe", this.recipe);
      this.$router.push({ name: "AdminRecipes" });
    },
  },
  created() {
    const exists = this.$store.getters.getRecipe(this.$route.params.slug);
    if (exists) {
      this.recipe = exists;
    }
  },
  template: `
<div class="post-shell" @keydown.ctrl.s.prevent="saveRecipe">
  <nav-bar>
    <template #start>
      <h1 class="h6">Add new recipe</h1>
    </template>
    <template #end>
      <app-button type="button" @click="deleteRecipe" variant="ghost">
        <app-icon slot="start">delete</app-icon>
      </app-button>
      <app-button type="button" @click="saveRecipe" variant="primary" :disabled="!recipe.title">
        <app-icon slot="start">save</app-icon>
        Save
      </app-button>
    </template>
  </nav-bar>
  <div class="edit">
    <div class="content">
      <h1><input v-model="recipe.title" type="text" placeholder="Title" /></h1>
      <textarea v-model="recipe.description" placeholder="Description"></textarea>

      <datalist id="unit-list">
        <option v-for="unit of units">{{ unit }}</option>
      </datalist>
      <datalist id="preparation-list">
        <option v-for="prep of preparation">{{ prep }}</option>
      </datalist>

      <h2>Ingredients</h2>
      <input-list :items="recipe.ingredients" v-slot="{ item }">
        <input v-model="item.quantity" type="number" />
        <input v-model="item.unit" list="unit-list" />
        <input v-model="item.name" />
        <input v-model="item.preparation" list="preparation-list" />
      </input-list>

      <h2>Instructions</h2>
      <input-list :items="recipe.instructions" v-slot="{ item }">
        <input v-model="item.text" />
      </input-list>

    </div>
  </div>
  <aside class="meta">
    <Panel label="Categories" open>
      <div>
        <span>Add New Categoy</span>
        <TagSelect v-model="recipe.categories"></TagSelect>
      </div>
    </Panel>
    <Panel label="Tags" open>
      <div>
        <span>Add New Tag</span>
        <TagSelect v-model="recipe.tags"></TagSelect>
        <small><i>Separate with commas or the Enter key.</i></small>
      </div>
    </Panel>
    <Panel label="Featured Image" open>
      <label>
        <span>Featured Image</span>
        <input type="url" v-model="recipe.featuredImage" />
        <img :src="recipe.featuredImage" v-if="featuredImageURL" class="img-fluid mt-1" />
      </label>
    </Panel>
    <Panel label="Excerpt">
      <label>
        <span>Excerpt</span>
        <textarea v-model="recipe.excerpt"></textarea>
      </label>
    </Panel>
    <Panel label="Author">
      <label>
        <span>Author</span>
        <input v-model="recipe.author" type="text" placeholder="Author" />
      </label>
    </Panel>
  </aside>
</div>
`,
};
