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
    width: 3rem;
    height: 1.5rem;
    padding: 0;
    background: var(--border);
  }
  button[role="switch"][aria-checked="true"] {
    --position: 1.5rem;
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
    width: 1.05rem;
    height: 1.05rem;
    margin: 0.225rem;
    transition: 0.15s;
    transform: translateX(var(--position, 0));
    background: var(--thumb-color, #fff);
    display: block;
    border-radius: 50%;
  }
</style>
