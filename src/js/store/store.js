const posts = localStorage.getItem("posts")
  ? JSON.parse(localStorage.getItem("posts"))
  : {};
const recipes = localStorage.getItem("recipes")
  ? JSON.parse(localStorage.getItem("recipes"))
  : {};

const localVuex = (store) => {
  store.subscribe(() => {
    localStorage.setItem("posts", JSON.stringify(store.state.posts));
    localStorage.setItem("recipes", JSON.stringify(store.state.recipes));
  });
};

export default {
  plugins: [localVuex],
  state: {
    posts,
    recipes,
    loggedIn: true,
  },
  mutations: {
    updatePost(state, post) {
      state.posts[post.slug] = post;

      new Notification(post.title + " successfully saved");
    },
    deletePost(state, post) {
      delete state.posts[post.slug];
    },
    updateRecipe(state, recipe) {
      state.recipes[recipe.slug] = recipe;

      new Notification(recipe.title + " successfully saved");
    },
    deleteRecipe(state, recipe) {
      delete state.recipes[recipe.slug];
    },
  },
  getters: {
    getPost: (state) => (slug) => {
      return state.posts[slug];
    },
    getPosts: (state) => () => {
      return Object.values(state.posts);
    },
    getRecipe: (state) => (slug) => {
      return state.recipes[slug];
    },
    getRecipes: (state) => () => {
      return Object.values(state.recipes);
    },
  },
};
