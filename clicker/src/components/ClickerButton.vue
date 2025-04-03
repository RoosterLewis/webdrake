<template>
  <button @click="increment">Click me</button>
  <b>{{ currentValue }}</b>
</template>
<script setup lang="ts">
import { computed, reactive } from "vue";

const clickerButton = reactive({
  value: 0,
});

const increment = () => clickerButton.value++;

const currentValue = computed(() => {
  return clickerButton.value;
});
</script>
<!-- <style scoped></style> -->
