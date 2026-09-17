import { computed, onMounted, ref, watch, type ComputedRef, type Ref } from 'vue';
import { readStorageList, writeStorageList } from '@/lib/readStorage';

interface UseStorageOptions {
  /** Read localStorage before first render. Only use with client:only islands. */
  immediate?: boolean;
}

export function useStorage<T>(
  key: string,
  defaultValue: T[] = [],
  options: UseStorageOptions = {}
) {
  const { immediate = false } = options;
  const all = ref<T[]>(defaultValue) as Ref<T[]>;
  let ready = false;
  let loaded = false;

  function load() {
    if (!import.meta.env.SSR) {
      all.value = readStorageList(key, defaultValue);
      loaded = true;
    }
  }

  if (immediate) {
    load();
  }

  onMounted(() => {
    if (!loaded) {
      load();
    }
    ready = true;
  });

  watch(
    all,
    (val) => {
      if (!ready) {
        return;
      }
      writeStorageList(key, val);
    },
    { deep: true }
  );

  function has(item: T): ComputedRef<boolean> {
    return computed(() => all.value.includes(item));
  }

  function toggle(item: T) {
    if (all.value.includes(item)) {
      remove(item);
    } else {
      add(item);
    }
  }

  function add(item: T) {
    all.value.unshift(item);
  }

  function addUnique(item: T) {
    if (!all.value.includes(item)) {
      add(item);
    }
  }

  function remove(item: T) {
    const index = all.value.indexOf(item);
    if (index !== -1) {
      all.value.splice(index, 1);
    }
  }

  function trim(count: number) {
    all.value = all.value.slice(0, count);
  }

  function clear() {
    all.value = [];
  }

  return { all, has, trim, toggle, add, addUnique, remove, clear };
}
