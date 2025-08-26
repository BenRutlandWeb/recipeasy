import { ref, computed } from "vue";

const originalServes = ref(1);
const serves = ref(1);

export function init(initialServes) {
    originalServes.value = initialServes;
    serves.value = initialServes;
}

export function useRecipe() {
    const scale = computed(() => serves.value / originalServes.value);
    return { serves, originalServes, scale };
}
