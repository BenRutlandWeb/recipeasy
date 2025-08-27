<template>
    <RouterLink
        :to="{ name: 'recipe', params: { slug: recipe.slug } }"
        class="flex items-center rounded shadow dark:bg-gray-850"
    >
        <img
            :src="recipe.image"
            :alt="recipe.title"
            width="360"
            height="360"
            loading="lazy"
            class="block w-16 rounded-l dark:filter dark:brightness-75 dark:contrast-110"
        />
        <h3 class="truncate-2 text-base font-bold py-2 px-4">
            {{ recipe.title }}
        </h3>
    </RouterLink>
</template>

<script setup>
const props = defineProps({
    recipe: {
        type: Object,
    },
});
</script>
