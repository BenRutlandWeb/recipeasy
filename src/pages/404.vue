<template>
  <Layout>
    <template #header>
      <AppBarLink :to="{ name: 'home' }" aria-label="Go home">
        <RecipeasyLogo />
      </AppBarLink>
      <AppBarTitle>Page not found</AppBarTitle>
      <DarkModeToggle />
    </template>
    <p>The page you were looking for cannot be found.</p>
  </Layout>
</template>
