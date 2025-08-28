import { computed, ref, watch } from "vue";

export function useStorage(key) {
    const stored = localStorage.getItem(key);

    const all = ref(stored ? JSON.parse(stored) : []);

    watch(
        all,
        (val) => {
            localStorage.setItem(key, JSON.stringify(val));
        },
        { deep: true }
    );

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
