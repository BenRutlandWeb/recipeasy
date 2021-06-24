<template>
  <Layout>
    <template #header>
      <AppBar title="Recipeasy" />
    </template>

    <ListGroup :items="recipes">
      <template #default="{ item }">
        <RouterLink :to="{ name: item.name }" class="flex gap-4 text-xl mb-2">
          {{ item.meta.title }}
        </RouterLink>
        <ChipGroup>
          <BaseChip v-for="tag in item.meta.keywords" :key="tag">
            {{ tag }}
          </BaseChip>
        </ChipGroup>
      </template>
    </ListGroup>
  </Layout>
</template>

<script setup>
import { useRouter } from "vue-router";

const recipes = useRouter().options.routes.filter((route) =>
  route.path.startsWith("/recipes")
);
</script>