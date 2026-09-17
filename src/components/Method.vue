<template>
  <button
    type="button"
    role="checkbox"
    @click="onToggle"
    aria-label="Mark step as complete"
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

<script setup lang="ts">
import { useRecipe } from '@/composables/useRecipe';
import { useStorage } from '@/composables/useStorage';
import BaseIcon from '@/components/BaseIcon.vue';

const props = defineProps<{
  stepKey: string;
}>();

const { slug } = useRecipe();
const { has, toggle } = useStorage<string>(`recipe-steps-${slug}`);

const checked = has(props.stepKey);

function onToggle() {
  toggle(props.stepKey);
}
</script>
