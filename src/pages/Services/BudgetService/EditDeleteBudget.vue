<template>
  <div class="h-full w-full flex flex-col justify-center items-left p-4 gap-2">
    <div class="text-2xl font-semibold">Edit Budget</div>
    <input
      type="text"
      class="p-2 border-2 border-secondary"
      placeholder="Category"
    />
    <input
      type="text"
      class="p-2 border-2 border-secondary"
      placeholder="Category"
    />
    <div class="flex w-full justify-between gap-2">
      <button class="p-2 border-2 border-secondary font-bold w-full">Edit</button>
      <button class="p-2 bg-red-400 text-white font-bold w-full">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('Loaded Eidt Transaction view');
  },
});
</script>
