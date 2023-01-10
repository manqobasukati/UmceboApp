<template>
  <div
    class="flex items-center w-full p-2 bg-gray-200 justify-around rounded-md"
  >
    <div
      v-for="(pill, key) in pills"
      :key="key"
      @click="onClickPill(pill)"
      :class="{ 'bg-white p-2 rounded-sm': pill.ui === activePill.ui }"
    >
      {{ pill.ui }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    activePill: {
      required: true,
      type: Object as PropType<{ api: string; ui: string }>,
    },
    pills: {
      required: true,
      type: Object as PropType<{ api: string; ui: string }[]>,
    },
  },
  emits: { setSelectedPill: String },
  setup(props, context) {
    const onClickPill = (pill: { api: string; ui: string }) => {
      context.emit('setSelectedPill', pill);
    };

    return {
      onClickPill,
    };
  },
});
</script>
