<template>
  <input type="checkbox" :checked="shouldBeChecked" @change="change" />
</template>

<script setup>
  import { defineProps, defineEmit, computed } from "vue";

  const props = defineProps({
    modelValue: [Boolean, Array],
    value: String,
  });

  const emit = defineEmit(["update:modelValue"]);

  const shouldBeChecked = computed(() => {
    if (props.modelValue instanceof Array) {
      return props.modelValue.includes(props.value);
    }
    return props.modelValue === true;
  });

  function change({ target }) {
    let isChecked = target.checked;

    if (props.modelValue instanceof Array) {
      let newValue = [...props.modelValue];

      if (isChecked) {
        newValue.push(props.value);
      } else {
        newValue.splice(newValue.indexOf(props.value), 1);
      }

      emit("update:modelValue", newValue);
    } else {
      emit("update:modelValue", isChecked);
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Material+Icons&text=%EE%A0%B5%EE%A0%B4%EE%A0%B6%EE%A0%B7");

  input[type="checkbox"] {
    appearance: none;
    margin: 0;
    cursor: pointer;
    color: inherit;
    font: 400 24px / 1 "Material Icons";
  }
  input[type="checkbox"]:checked {
    color: var(--brand-secondary);
    --content: "\e834";
  }
  input[type="checkbox"]:focus {
    outline: none;
  }
  input[type="checkbox"]:disabled {
    opacity: 0.5;
  }
  input[type="checkbox"]::before {
    content: var(--content, "\e835") / "";
  }
</style>
