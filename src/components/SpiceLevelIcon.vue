<template>
    <BaseIcon v-if="level" :icon="icon" class="text-red-700 dark:text-red-400" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    level: { type: Number, default: 0 },
});

const icon = computed(() => {
    if (props.level === 1) {
        return "chili_mild";
    } else if (props.level === 2) {
        return "chili_medium";
    } else if (props.level === 3) {
        return "chili_hot";
    }
});
</script>
