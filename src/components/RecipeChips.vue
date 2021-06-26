<template>
  <ChipGroup>
    <BaseChip v-for="chip in chips" :key="chip">
      {{ chip }}
    </BaseChip>
  </ChipGroup>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  chips: {
    type: Array,
  },
});
</script>