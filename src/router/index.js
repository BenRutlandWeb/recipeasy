import { createRouter, createWebHistory } from "vue-router";

import Home from "/src/pages/index.vue";
import NotFound from "/src/pages/404.vue";

const routes = [
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
    path: "/recipes/:slug",
    component: () => import("/src/pages/recipes/[slug].vue"),
    name: "recipe",
    props: true,
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

export default router;
