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
    return savedPosition || { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title + " | Recipeasy";
  } else {
    document.title = "Recipeasy";
  }

  next();
});

export default router;
