<template>
  <ChipGroup>
    <BaseChip v-for="chip in chips.sort()" :key="chip">
      {{ chip }}
    </BaseChip>
  </ChipGroup>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  chips: {
    type: Array,
  },
});
</script>