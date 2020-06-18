export default {
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("views/Home.js"),
    },
    {
      path: "/recipes",
      redirect: { name: "Home" },
    },
    {
      path: "/recipes/:slug",
      name: "Recipe",
      component: () => import("views/Recipe.js"),
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("views/Admin/Index.js"),
      children: [
        {
          path: "recipes",
          name: "AdminRecipes",
          component: () => import("views/Admin/Recipes.js"),
        },
        {
          path: "recipes/new",
          name: "AdminNewRecipe",
          component: () => import("views/Admin/Recipe.js"),
        },
        {
          path: "recipes/:slug",
          name: "AdminEditRecipe",
          component: () => import("views/Admin/Recipe.js"),
        },
      ],
    },

    {
      path: "*",
      name: "404",
      component: () => import("views/404.js"),
    },
  ],
};
