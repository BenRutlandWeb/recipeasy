<template>
    <span class="inline-flex gap-2 items-center">
        <button
            type="button"
            @click="decrement"
            :disabled="serves <= 1"
            class="leading-none border border-gray-300 dark:border-gray-700 rounded disabled:opacity-20"
        >
            <BaseIcon icon="minus" />
        </button>
        <span class="w-6 text-center">{{ serves }}</span>
        <button
            type="button"
            @click="increment"
            class="leading-none border border-gray-300 dark:border-gray-700 rounded"
        >
            <BaseIcon icon="add" />
        </button>
    </span>
</template>

<script setup>
import { useRecipe } from "@/composables/useRecipe";

const { serves } = useRecipe();

function decrement() {
    if (serves.value > 1) {
        serves.value--;
    }
}

function increment() {
    serves.value++;
}
</script>
