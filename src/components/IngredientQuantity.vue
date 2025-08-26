<template>
    <span>
        {{ toFraction(quantity * scale) }}
    </span>
</template>

<script setup>
import { useRecipe } from "@/composables/useRecipe";
import { toFraction } from "@/utils/fraction";

const props = defineProps({
    quantity: {
        type: Number,
    },
});

const { scale } = useRecipe();
</script>
