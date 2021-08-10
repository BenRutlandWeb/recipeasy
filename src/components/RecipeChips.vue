<template>
  <ChipGroup>
    <BaseChip v-for="chip in chips.sort()" :key="chip">
      {{ chip }}
    </BaseChip>
  </ChipGroup>
</template>

<script setup>
const props = defineProps({
  chips: {
    type: Array,
  },
});
</script>