<template>
  <div class="flex w-full flex-col gap-2">
    <div
      @click="selectItem()"
      class="flex gap-1 items-center w-full justify-between border border-purple-100 rounded-sm p-2"
    >
      <icon-detail-vertical :icon="'attach_money'" :iconSize="'icon-sm'" />
      <div class="flex w-full flex-col">
        <div class="text-md font-bold">{{ props.budget_item.name }}</div>
        <div class="text-xs text-gray-300"></div>
      </div>
      <div class="text-md text-success">{{ props.budget_item.amount_allocation }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BudgetItem, TransactionType } from '@/models/Budget.model';
import { defineComponent } from 'vue';

import type { PropType } from 'vue';

type Props = {
  budget_item: BudgetItem;
};


const emits = defineEmits(['editItem']);

const props = defineProps<Props>();


function selectItem() {
  emits('editItem');
}
</script>
