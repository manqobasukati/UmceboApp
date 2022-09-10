<template>
  <div class="flex flex-col items-center text-lg">
    <div class="text-gray-300">Total Spent</div>
    <div class="font-bold" :class="`${color || 'text-gray-400'}`">4526.00</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    value: String,
    color: String,
  },
  setup() {},
});
</script>
