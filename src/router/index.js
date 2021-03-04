import { createRouter, createWebHistory } from "vue-router";
import routes from "voie-pages";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
    return savedPosition || { x: 0, y: 0 };
  },
});

export default router;
