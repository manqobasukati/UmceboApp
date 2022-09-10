<template>
  <div class="flex  gap-2">
    <span class="material-icons-outlined">{{ icon }}</span>
    <div>{{ detail }}</div>
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
