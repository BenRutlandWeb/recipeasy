<script setup>
const props = defineProps({
    chips: {
        type: Array,
    },
});
</script>

<template>
    <ChipGroup>
        <BaseChip v-for="chip in chips.sort()" :key="chip" :term="chip">
            {{ chip }}
        </BaseChip>
    </ChipGroup>
</template>
