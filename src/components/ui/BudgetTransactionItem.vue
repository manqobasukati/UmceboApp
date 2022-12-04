<template>
  <div class="flex w-full flex-col gap-2">
    <div
      @click="selectItem()"
      class="flex gap-1 items-center w-full justify-between border border-purple-100 rounded-sm p-2"
    >
      <icon-detail-vertical :icon="'attach_money'" :iconSize="'icon-sm'" />
      <div class="flex w-full flex-col">
        <div class="text-md font-bold">{{item?.name}}</div>
        <div class="text-xs text-gray-300">a month ago</div>
      </div>
      <div class="text-md text-success">{{item?.amount}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import type { BudegtItem } from '@/models/Budget.model';
import { defineComponent } from 'vue';

import type { PropType } from 'vue';

export default defineComponent({
  emits: ['editItem'],
  props: {
    item: {
      type: Object as PropType<BudegtItem>,
    },
  },
  setup(props, context) {
    const selectItem = () => {
      context.emit('editItem');
    };
    return {
      selectItem,
    };
  },
});
</script>
