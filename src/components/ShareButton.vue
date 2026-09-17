<template>
  <button type="button" @click="share" :aria-label="label">
    <BaseIcon :icon="icon" />
    <span v-if="copied" class="sr-only">Link copied</span>
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import BaseIcon from '@/components/BaseIcon.vue';

const canShare = ref(false);
const copied = ref(false);

async function share() {
  if (canShare.value) {
    try {
      await navigator.share({ url: window.location.href });
      return;
    } catch {
      //
    }
  }

  try {
    await navigator.clipboard.writeText(window.location.href);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch {
    //
  }
}

onMounted(() => {
  canShare.value = typeof navigator.share === 'function';
});

const icon = computed(() => (copied.value ? 'check_circle_outline' : 'share'));
const label = computed(() =>
  copied.value ? 'Link copied' : canShare.value ? 'Share recipe' : 'Copy recipe link'
);
</script>
