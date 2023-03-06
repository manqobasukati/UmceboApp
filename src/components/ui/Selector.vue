<template>
  <div class="flex w-full gap-2">
    <div
      v-for="(option, key) in options"
      :key="key"
      @click="
        () => {
          emits('selectOption', option);
        }
      "
      class="border-2 border-secondary w-1/2 p-2 flex justify-between"
      :class="{ 'bg-secondary text-white': option === activeOption }"
    >
      <span>{{option}}</span
      ><span v-if="option === activeOption" class="material-icons"
        >check_circle</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  options: string[];
  activeOption: string;
};

const props = defineProps<Props>();

const emits = defineEmits(['selectOption']);
</script>
