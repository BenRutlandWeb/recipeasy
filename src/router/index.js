import { createRouter, createWebHistory } from 'vue-router';
import { useStorage } from '@/composables/useStorage';

const recipes = import.meta.glob('@/data/recipes/*.json', { eager: true });

const recipeRoutes = Object.entries(recipes).map(([filepath, { default: recipe }]) => {
  const slug = filepath
    .split('/')
    .pop()
    .replace(/\.json$/, '');
  return {
    path: `/recipes/${slug}`,
    name: `recipes-${slug}`,
    component: () => import('@/pages/recipe.vue'),
    props: { recipe: { slug, ...recipe } },
    meta: {
      slug,
      title: recipe.title,
      description: recipe.description,
    },
  };
});

const routes = [
  ...recipeRoutes,
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
    name: 'home',
  },
  {
    path: '/search',
    component: () => import('@/pages/search.vue'),
    name: 'search',
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/pages/404.vue'),
  },
];

const DEFAULT_DESCRIPTION = 'Recipeasy - the simplest way to manage your recipe book';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

function updateRecentRecipes(route) {
  if (!route.path.startsWith('/recipes')) {
    return;
  }

  const { all, add, remove, trim } = useStorage('recent');

  const slug = route.meta.slug;

  if (all.value.includes(slug)) {
    remove(slug);
  }

  add(slug);

  trim(10);
}

function updateMetaDescription(content) {
  const el = document.querySelector('meta[name="description"]');
  if (el) {
    el.setAttribute('content', content);
  }
}

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ? `${to.meta.title} | Recipeasy` : 'Recipeasy';

  updateMetaDescription(to.meta?.description || to.meta?.title || DEFAULT_DESCRIPTION);

  updateRecentRecipes(to);

  next();
});

export default router;
