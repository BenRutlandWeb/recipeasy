<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import JsonRecipeLayout from "@/templates/JsonRecipeLayout.vue";
</script>

<template>
    <Suspense>
        <JsonRecipeLayout />
    </Suspense>
</template>
