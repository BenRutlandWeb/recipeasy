import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/index.vue"),
    name: "home",
  },
  {
    path: "/recipes/:slug",
    component: () => import("@/pages/recipe.vue"),
    name: "recipe",
  },
  {
    path: "/search",
    component: () => import("@/pages/search.vue"),
    name: "search",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/pages/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

function updateRecentRecipes(route) {
  if (!route.path.startsWith("/recipes")) {
    return;
  }

  const slug = route.params.slug;

  let recent = JSON.parse(localStorage.getItem("recent") ?? "[]");

  if (recent[0] == slug) {
    return;
  }

  recent = recent.filter((recipe) => recipe !== slug);
  recent.unshift(slug);
  recent = recent.slice(0, 10);

  localStorage.setItem("recent", JSON.stringify(recent));
}

router.beforeEach((to, from, next) => {
  //console.log(to);

  //@todo fix title
  //console.log(recipes, to);

  if (to.meta?.title) {
    document.title = to.meta.title + " | Recipeasy";
  } else {
    document.title = "Recipeasy";
  }

  updateRecentRecipes(to);

  next();
});

export default router;
