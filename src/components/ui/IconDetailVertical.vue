<template>
  <div
    :class="`flex flex-col items-center justify-between ${
      color || 'text-black'
    } ${spaceBetween || 'gap-2'} p-2`"
  >
    <span :class="`${iconSize || 'icon-sm'} material-icons-outlined `">{{
      icon
    }}</span>
    <div :class="`${detailSize || 'text-sm'}`">{{ detail }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    detail: String,
    detailSize: String,
    iconSize: String,
    icon: String,
    color: String,
    spaceBetween: String,
  },
  setup() {},
});
</script>

<style scoped>
.icon-lg {
  font-size: 5rem;
}
.icon-md {
  font-size: 3rem;
}
.icon-sm {
  font-size: 2rem;
}
</style>
