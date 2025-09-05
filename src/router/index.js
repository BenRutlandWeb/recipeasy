import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import { useStorage } from "@/composables/useStorage";

const recipes = import.meta.glob("@/data/recipes/*.json", { eager: true });

const recipeRoutes = Object.entries(recipes).map(
  ([filepath, { default: recipe }]) => {
    const slug = filepath
      .split("/")
      .pop()
      .replace(/\.json$/, "");
    return {
      path: `/recipeasy/recipes/${slug}`,
      name: `recipes-${slug}`,
      component: () => import("@/pages/recipe.vue"),
      props: { recipe: { slug, ...recipe } },
      meta: {
        slug,
        title: recipe.title,
      },
    };
  }
);

const routes = [
  ...recipeRoutes,
  {
    path: "/recipeasy/",
    component: () => import("@/pages/index.vue"),
    name: "home",
  },
  {
    path: "/recipeasy/search",
    component: () => import("@/pages/search.vue"),
    name: "search",
  },
  {
    path: "/recipeasy/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/pages/404.vue"),
  },
];

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

function updateRecentRecipes(route) {
  if (!route.path.startsWith("/recipes")) {
    return;
  }

  const { all, add, remove, trim } = useStorage("recent");

  const slug = route.meta.slug;

  if (all.value.includes(slug)) {
    remove(slug);
  }

  add(slug);

  trim(10);
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
