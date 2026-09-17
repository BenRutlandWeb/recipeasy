<script setup lang="ts">
import { useRecipe } from '@/composables/useRecipe';
import { useStorage } from '@/composables/useStorage';
import { toFraction } from '@/utils/fraction';
import { computed } from 'vue';
import BaseIcon from '@/components/BaseIcon.vue';

const props = defineProps<{
  name: string;
  quantity?: number | null;
  unit?: string;
}>();

const { scale, slug } = useRecipe();
const { has, toggle } = useStorage<string>(`recipe-checked-${slug}`);

const scaledQuantity = computed(() =>
  props.quantity ? toFraction(props.quantity * scale.value) : ''
);

const checked = has(props.name);

function onToggle() {
  toggle(props.name);
}
</script>

<template>
  <button
    type="button"
    role="checkbox"
    @click="onToggle"
    :aria-label="`Mark ${name} as gathered`"
    :aria-checked="checked ? 'true' : 'false'"
    class="w-full text-start flex gap-2"
  >
    <BaseIcon
      class="shrink-0 mt-0.5"
      :class="{ 'text-pink-600': checked, 'opacity-20': !checked }"
      :icon="checked ? 'check_circle_outline' : 'circle'"
    />
    <span :class="{ 'opacity-60': checked }"> {{ scaledQuantity }}{{ unit }} <slot /> </span>
  </button>
</template>
