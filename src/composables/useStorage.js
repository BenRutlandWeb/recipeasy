import { ref, watch, onMounted, computed } from "vue";

export function useStorage(key) {
  const all = ref([]);

  onMounted(() => {
    // This code only runs in the browser, after the component is mounted.
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          all.value = JSON.parse(stored);
        } catch (e) {
          console.error("Failed to parse localStorage value", e);
        }
      }
    }

    // The watcher is set up here, so it only runs on the client.
    watch(
      all,
      (val) => {
        if (typeof window !== "undefined" && window.localStorage) {
          try {
            localStorage.setItem(key, JSON.stringify(val));
          } catch (e) {
            console.error("Failed to save to localStorage", e);
          }
        }
      },
      { deep: true }
    );
  });

  function has(item) {
    return computed(() => all.value.includes(item));
  }

  function toggle(item) {
    if (all.value.includes(item)) {
      remove(item);
    } else {
      add(item);
    }
  }

  function add(item) {
    all.value.unshift(item);
  }

  function addUnique(item) {
    if (!all.value.includes(item)) {
      add(item);
    }
  }

  function remove(item) {
    all.value.splice(all.value.indexOf(item), 1);
  }

  function trim(count) {
    all.value = all.value.slice(0, count);
  }

  function clear() {
    all.value = [];
  }

  return { all, has, trim, toggle, add, addUnique, remove, clear };
}
