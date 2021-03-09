<template>
  <input type="radio" :checked="shouldBeChecked" @change="change" />
</template>

<script setup>
  import { defineProps, defineEmit, computed } from "vue";

  const props = defineProps({
    modelValue: {
      default: "",
    },
    value: String,
  });

  const emit = defineEmit(["update:modelValue"]);

  const shouldBeChecked = computed(() => {
    return props.modelValue === props.value;
  });

  function change({ target }) {
    emit("update:modelValue", props.value);
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Material+Icons&text=%EE%A0%B5%EE%A0%B4%EE%A0%B6%EE%A0%B7");

  input[type="radio"] {
    appearance: none;
    margin: 0;
    cursor: pointer;
    color: inherit;
    font: 400 24px / 1 "Material Icons";
  }
  input[type="radio"]:checked {
    color: var(--brand-secondary);
    --content: "\e837";
  }
  input[type="radio"]:focus {
    outline: none;
  }
  input[type="radio"]:disabled {
    opacity: 0.5;
  }
  input[type="radio"]::before {
    content: var(--content, "\e836") / "";
  }
</style>
