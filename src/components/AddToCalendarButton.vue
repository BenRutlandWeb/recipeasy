<template>
    <button type="button" @click="modal = true" aria-label="Share recipe" v-bind="$attrs">
        <BaseIcon icon="calendar" />
    </button>
    <AppModal v-model="modal" title="Select a date">
        <div class="flex border divide-x rounded dark:border-gray-700 dark:divide-gray-700">
            <input
                type="date"
                v-model="date"
                autofocus
                class="w-full p-2 placeholder-gray-500 focus:outline-none bg-transparent"
            />
            <button type="button" class="px-4 py-2" @click="add" aria-label="Add to calendar">Add</button>
        </div>
    </AppModal>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const date = ref(new Date().toISOString().split("T")[0]);
const modal = ref(false);

async function add() {
    const title = encodeURIComponent(route.meta.title);
    const url = window.location.href;
    const d = date.value.replaceAll("-", "");

    try {
        window.open(
            `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${d}/${d}&details=${url}`,
            "_blank"
        );
        modal.value = false;
    } catch {
        //
    }
}

const props = defineProps({
    open: Boolean,
});
</script>

<style scoped>
/* Remove the calendar icon for date input */
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
}

/* For Firefox, this is the equivalent */
input[type="date"]::-moz-clear {
    display: none;
}
</style>
