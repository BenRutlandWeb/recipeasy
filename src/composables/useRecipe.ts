import {
  ref,
  computed,
  provide,
  inject,
  watch,
  type Ref,
  type ComputedRef,
  type InjectionKey,
} from 'vue';
interface RecipeState {
  serves: Ref<number>;
  originalServes: Ref<number>;
  scale: ComputedRef<number>;
  slug: string;
}
const RECIPE_STATE_KEY: InjectionKey<RecipeState> = Symbol('recipeState');
function readServes(slug: string): number | null {
  if (import.meta.env.SSR) {
    return null;
  }
  const value = localStorage.getItem(`recipe-serves-${slug}`);
  return value ? Number(value) : null;
}
export function provideRecipeState(slug: string, initialServes: number) {
  const originalServes = ref(initialServes);
  const serves = ref(readServes(slug) ?? initialServes);
  const scale = computed(() => serves.value / originalServes.value);
  if (!import.meta.env.SSR) {
    watch(serves, (value) => {
      localStorage.setItem(`recipe-serves-${slug}`, String(value));
    });
  }
  const state: RecipeState = { serves, originalServes, scale, slug };
  provide(RECIPE_STATE_KEY, state);
  return state;
}
export function useRecipe() {
  const state = inject(RECIPE_STATE_KEY);
  if (!state) {
    throw new Error('useRecipe must be used within a component that calls provideRecipeState');
  }
  return state;
}
