<script setup>
import { useRecipe } from "@/composables/useRecipe";
import { toFraction } from "@/utils/fraction";
import { computed, ref } from "vue";

const props = defineProps({
    quantity: {
        type: [Number, null],
    },
    unit: {
        type: String,
    },
});

const { scale } = useRecipe();

const scaledQuantity = computed(() => (props.quantity ? toFraction(props.quantity * scale.value) : ""));

const checked = ref(false);
</script>

<template>
    <button
        type="button"
        role="switch"
        @click="checked = !checked"
        aria-label="Toggle ingredient"
        :aria-checked="checked ? 'true' : 'false'"
        class="w-full text-start flex gap-2"
    >
        <BaseIcon
            class="shrink-0 mt-0.5"
            :class="{ 'text-pink-600': checked, 'opacity-20': !checked }"
            :icon="checked ? 'check_circle_outline' : 'circle'"
        />
        <span :class="{ 'opacity-60': checked }">{{ scaledQuantity }}{{ unit }} <slot /></span>
    </button>
</template>
