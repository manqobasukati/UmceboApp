<template>
  <div
    class="flex items-center w-full p-2 bg-gray-200 justify-around rounded-md"
  >
    <div
      v-for="(pill, key) in pills"
      :key="key"
      @click="onClickPill(pill)"
      :class="{ 'bg-white p-2 rounded-sm': pill === activePill }"
    >
      {{ pill }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    activePill: String,
    pills: {
      required: true,
      type: Object as PropType<string[]>,
    },
  },
  emits: { setSelectedPill: String },
  setup(props, context) {
    const onClickPill = (pill: string) => {
      context.emit('setSelectedPill', pill);
    };

    return {
      onClickPill,
    };
  },
});
</script>
