<template>
  <div class="flex flex-col items-center text-lg">
    <div class="text-gray-300">{{title}}</div>
    <div class="font-bold" :class="`${color || 'text-gray-400'}`">{{value}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    value: Number,
    color: String,
  },
  setup() {},
});
</script>
