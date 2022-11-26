<template>
  <div class="h-screen w-screen">
    <div class="h-1/6 bg-primary w-full flex justify-between items-center p-4">
      <div class="bg-white flex items-center justify-center p-2">
        <span @click="navigateBack()" class="material-icons">arrow_back</span>
      </div>
      <div class="text-white text-xl">{{ pageTitle }}</div>
      <span class="material-icons-outlined text-white">notifications</span>
    </div>
    <div class="h-5/6 p-4">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    pageTitle: String,
  },
  setup() {
    const router = useRouter();
    const navigateBack = () => {
      router.go(-1);
    };

    return {
      navigateBack,
    };
  },
});
</script>
