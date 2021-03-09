<template>
  <button
    type="button"
    role="switch"
    :aria-checked="modelValue"
    @click="toggle"
  ></button>
</template>

<script setup>
  import { defineProps, defineEmit } from "vue";

  const props = defineProps({
    modelValue: Boolean,
  });
  const emit = defineEmit(["update:modelValue"]);

  function toggle() {
    emit("update:modelValue", !props.modelValue);
  }
</script>

<style>
  button[role="switch"] {
    border: 0;
    border-radius: 999px;
    width: 2rem;
    height: 1rem;
    padding: 0;
    background: var(--border);
  }
  button[role="switch"][aria-checked="true"] {
    --position: 1rem;
    --thumb-color: var(--brand-secondary);
  }
  button[role="switch"]:focus {
    outline: none;
  }
  button[role="switch"]:focus-visible {
    box-shadow: 0 0 0 0.125rem black;
  }
  button[role="switch"]:disabled {
    opacity: 0.5;
  }
  button[role="switch"]::before,
  button[role="switch"]::after {
    content: "";
  }
  button[role="switch"]::before {
  }
  button[role="switch"]::after {
    width: 0.7rem;
    height: 0.7rem;
    margin: 0.15rem;
    transition: 0.15s;
    transform: translateX(var(--position, 0));
    background: var(--thumb-color, #fff);
    display: block;
    border-radius: 50%;
  }
</style>
