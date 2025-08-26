<template>
    <button
        type="button"
        role="switch"
        @click="checked = !checked"
        aria-label="Toggle ingredient"
        :aria-checked="checked ? 'true' : 'false'"
        class="w-full text-start grid items-center gap-2"
    >
        <BaseIcon
            class="absolute top-0 right-0"
            :class="{ 'text-pink-600': checked, 'opacity-20': !checked }"
            :icon="checked ? 'check_circle_outline' : 'circle'"
        />
        <span :class="{ 'opacity-60': checked }"><slot /></span>
    </button>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
</script>
