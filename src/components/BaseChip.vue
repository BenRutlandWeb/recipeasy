<script setup>
const props = defineProps({
    term: {
        type: String,
    },
});
</script>

<template>
    <RouterLink
        :to="{ name: 'search', query: { q: term.toLowerCase() } }"
        class="chip rounded py-0.5 px-2 text-sm bg-gray-100 dark:bg-gray-800 capitalize"
    >
        <slot />
    </RouterLink>
</template>
