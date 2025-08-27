<template>
    <component :is="tag">
        <template v-for="item in items">
            <li :key="item" v-if="item">
                <slot :item="item">{{ item }}</slot>
            </li>
        </template>
    </component>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
    },
    tag: {
        type: String,
        default: "ul",
    },
});
</script>
