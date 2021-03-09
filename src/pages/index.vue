<template>
  <Layout>
    <template #header>
      <RecipeAppBar title="Recipeasy" />
    </template>

    <p>Welcome to Recipeasy</p>

    <div>
      <base-checkbox v-model="checkToggle" />
      {{ checkToggle ? "chicken" : "egg" }}
    </div>
    <div>
      <base-checkbox v-model="check" value="chicken" />
      <base-checkbox v-model="check" value="egg" />
      <base-checkbox v-model="check" value="kfc" disabled />
      {{ check }}
    </div>
    <div>
      <base-radio v-model="radio" value="chicken" />
      <base-radio v-model="radio" value="egg" />
      <base-radio v-model="radio" value="kfc" disabled />
      {{ radio }}
    </div>
    <div>
      <base-switch v-model="switchToggle" />
      <base-switch disabled />
      <base-switch v-model="switchToggle" disabled />
      {{ switchToggle ? "chicken" : "egg" }}
    </div>
  </Layout>
</template>

<script setup>
  import { ref } from "vue";

  const checkToggle = ref(true);
  const check = ref(["chicken"]);
  const radio = ref("chicken");
  const switchToggle = ref(true);
</script>
