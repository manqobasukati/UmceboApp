<template>
    <div class="h-full w-full flex flex-col justify-center items-left p-4 gap-2">
      <div class="text-2xl font-semibold">Add Budget</div>
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
  
      <button class="p-2 bg-secondary text-white font-bold">Submit</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      console.log('Loaded Transaction view');
    },
  });
  </script>
  