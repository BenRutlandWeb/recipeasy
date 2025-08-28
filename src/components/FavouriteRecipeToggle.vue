<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const recipes = JSON.parse(localStorage.getItem("favourites") ?? "[]");
const route = useRoute();

const slug = route.meta.slug;
const favourited = ref(recipes.includes(slug));

function toggleFavourite() {
    if (recipes.includes(slug)) {
        recipes.splice(recipes.indexOf(slug), 1);
        favourited.value = false;
    } else {
        recipes.unshift(slug);
        favourited.value = true;
    }

    localStorage.setItem("favourites", JSON.stringify(recipes));
}
</script>

<template>
    <button
        type="button"
        role="switch"
        @click="toggleFavourite"
        aria-label="Toggle favourite"
        :aria-checked="favourited ? 'true' : 'false'"
    >
        <BaseIcon :class="{ 'text-pink-600': favourited }" :icon="favourited ? 'favorite' : 'favorite_border'" />
    </button>
</template>
