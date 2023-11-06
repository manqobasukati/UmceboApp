<template>
  <div class="h-full w-full flex flex-col justify-center items-left p-4 gap-2">
    <div class="text-2xl font-semibold">Edit Transaction </div>
    <input
      type="text"
      class="p-2 border-2 border-secondary"
      v-model="internal.description"
      placeholder="Category"
    
    />
    <input
      type="text"
      class="p-2 border-2 border-secondary"
      v-model="internal.amount"
      placeholder="Amount"
    />
    <div class="flex w-full justify-between gap-2">
      <button class="p-2 border-2 border-secondary font-bold w-full">Edit</button>
      <button class="p-2 bg-red-400 text-white font-bold w-full">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Selector from '@/components/ui/Selector.vue';
import type { TransactionItem } from '@/models/Transaction.model';
import { ref, type Ref } from 'vue';


type Props = {
  transaction_item: TransactionItem;
};

const props = defineProps<Props>();

const internal:Ref<TransactionItem> = ref(JSON.parse(JSON.stringify(props.transaction_item)));

const emits = defineEmits(['deleteItem', 'editItem']);

function submit(action: 'editItem' | 'deleteItem') {
  emits(action, internal.value);
}
</script>
