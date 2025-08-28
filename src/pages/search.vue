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
    const searchWords = query.value.toLowerCase().split(/\s+/).filter(Boolean);

    const tempSlugs = {};

    Object.entries(searchIndex).forEach(([keyword, _slugs]) => {
        searchWords.forEach((q) => {
            if (keyword.includes(q)) {
                if (!tempSlugs[q]) {
                    tempSlugs[q] = new Set();
                }
                _slugs.forEach((s) => tempSlugs[q].add(s));
            }
        });
    });

    if (Object.keys(tempSlugs).length === 0) {
        return [];
    }

    return Object.values(tempSlugs)
        .map((s) => [...s])
        .reduce((accumulator, currentArray) => {
            return accumulator.filter((item) => currentArray.includes(item));
        });
}

const queriedRecipes = computed(() => {
    const slugs = search();

    return slugs.map((slug) => recipesArray.find((r) => r.slug === slug));
});
</script>
