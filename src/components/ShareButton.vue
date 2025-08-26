<template>
    <button type="button" @click="share" aria-label="Share recipe" v-if="canShare">
        <BaseIcon icon="share" />
    </button>
</template>

<script setup>
import { ref } from "vue";

async function share() {
    try {
        await navigator.share({ url: window.location.href });
    } catch {
        //
    }
}

const canShare = ref(navigator.canShare);
</script>
