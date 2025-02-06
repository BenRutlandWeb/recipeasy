<template>
    <div
        v-if="modelValue"
        class="bg-black bg-opacity-50 fixed inset-0 z-50 grid place-items-center p-4"
        @click.self="close"
    >
        <div class="bg-white dark:bg-gray-850 m-auto w-full max-w-screen-sm rounded">
            <div class="flex justify-between gap-4 p-4">
                <p class="font-bold">{{ title }}</p>
                <button type="button" @click="close" aria-label="Close">
                    <BaseIcon icon="close" />
                </button>
            </div>
            <div class="p-4">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: Boolean,
    title: String,
});

const emit = defineEmits(["update:modelValue"]);

function close() {
    emit("update:modelValue", false);
}
</script>
