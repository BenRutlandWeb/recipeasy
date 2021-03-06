import { createRouter, createWebHistory } from "vue-router";
import virtualRoutes from "virtual:generated-pages";
import Home from "/src/pages/index.vue";
import NotFound from "/src/pages/404.vue";

const routes = [
  ...virtualRoutes,
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/search",
    component: () => import("/src/pages/search.vue"),
    name: "search",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
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
  let recent = JSON.parse(localStorage.getItem("recent") ?? "[]");

  if (recent[0] == route.name) {
    return;
  }
  recent = recent.filter((recipe) => recipe !== route.name);
  recent.unshift(route.name);
  recent = recent.slice(0, 10);
  localStorage.setItem("recent", JSON.stringify(recent));
}

router.beforeEach((to, from, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title + " | Recipeasy";
  } else {
    document.title = "Recipeasy";
  }

  updateRecentRecipes(to);

  next();
});

export default router;
