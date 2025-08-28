<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStorage } from "@/composables/useStorage";

const { toggle, has } = useStorage("favourites");

const route = useRoute();

const slug = route.meta.slug;

const favourited = has(slug);

function toggleFavourite() {
    toggle(slug);
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
