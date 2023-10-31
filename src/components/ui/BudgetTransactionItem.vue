<template>
  <div class="flex w-full flex-col gap-2">
    <div
      @click="selectItem()"
      class="flex gap-1 items-center w-full justify-between border border-purple-100 rounded-sm p-2"
      v-if="budget_item"
    >
      <icon-detail-vertical :icon="'attach_money'" :iconSize="'icon-sm'" />
      <div class="flex w-full flex-col">
        <div class="text-md font-bold">{{ props.budget_item }}</div>
        <div class="text-xs text-gray-300"></div>
      </div>
      <div class="text-md text-success">{{ props.budget_item }}</div>
    </div>
    <div
      v-else-if="transaction_item"
      class="flex gap-1 items-center w-full justify-between border border-purple-100 rounded-sm p-2"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { BudgetItem, TransactionType } from '@/models/Budget.model';
import type { TransactionItem } from '@/models/Transaction.model';

type Props = {
  budget_item?: BudgetItem ;
  transaction_item?: TransactionItem;
};

const emits = defineEmits(['editItem']);

const props = defineProps<Props>();

function selectItem() {
  emits('editItem', props.budget_item);
}
</script>
