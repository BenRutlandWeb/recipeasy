<template>
    <input type="number" v-model.number="serves" min="1" />
</template>

<script setup>
import { useRecipe } from "@/composables/useRecipe";

const { serves } = useRecipe();
</script>
