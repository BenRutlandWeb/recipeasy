<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const recipe = ref({});

await import(`../../src/pages/json/${route.meta.jsonFile}.json`).then((module) => {
    recipe.value = module.default;
});
</script>

<template>
    <AppHeader>
        <slot name="header">
            <AppBarLink :to="{ name: 'home' }" aria-label="Go home">
                <BaseIcon icon="arrow_back" />
            </AppBarLink>
            <AppBarTitle>{{ recipe.title }}</AppBarTitle>
            <DarkModeToggle />
        </slot>
    </AppHeader>

    <AppMain class="md:grid-cols-3 md:items-start">
        <div class="grid gap-6">
            <RecipeImage :src="recipe.image" :alt="recipe.title" />
            <RecipeActionButtons />
            <RecipeChips :chips="recipe.keywords" />
        </div>
        <div class="grid gap-6 md:col-span-2">
            <h1>{{ recipe.title }}</h1>

            <p>{{ recipe.description }}</p>
        </div>
    </AppMain>

    <CookModeToggle />

    <AppFooter />
</template>
