<template>
    <Layout>
        <template #header>
            <SearchAppBar />
        </template>

        <ListGroup
            :items="queriedRecipes"
            v-if="query && queriedRecipes.length"
            class="grid gap-6 content-start md:max-w-lg md:mx-auto w-full"
        >
            <template #default="{ item }">
                <SmallRecipeCard :recipe="item" />
            </template>
        </ListGroup>

        <p v-else-if="query">No recipes found.</p>

        <div class="text-center grid gap-4" v-else>
            <BaseIcon icon="search" class="w-64 h-64 mx-auto text-gray-100" />

            <p class="text-2xl">Search Recipeasy</p>
        </div>
    </Layout>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import recipes from "@/data/recipes.json";
import searchIndex from "@/data/recipes-search.json";

const route = useRoute();
const query = computed(() => route.query.q || "");

const recipesArray = Object.entries(recipes).map(([slug, recipe]) => {
    return { slug, ...recipe };
});

function search() {
    const q = query.value.toLowerCase();
    const slugs = new Set();

    Object.entries(searchIndex).forEach(([keyword, _slugs]) => {
        if (keyword.includes(q)) {
            _slugs.forEach((slug) => slugs.add(slug));
        }
    });

    return [...slugs];
}

const queriedRecipes = computed(() => {
    const slugs = search();

    return slugs.map((slug) => recipesArray.find((r) => r.slug === slug));
});
</script>
