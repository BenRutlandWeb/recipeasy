<template>
    <AppHeader>
        <slot name="header">
            <RecipeAppBar />
        </slot>
    </AppHeader>
    <AppMain class="md:grid-cols-3 md:items-start">
        <slot />
    </AppMain>
    <CookModeToggle />
    <AppFooter />
</template>
