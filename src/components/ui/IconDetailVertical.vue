<template>
  <div class="flex flex-col items-center justify-between gap-2">
    <span class="material-icons-outlined">{{ icon }}</span>
    <div class="text-sm">{{ detail }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    icon: String,
    detail: String,
  },
  setup() {},
});
</script>
