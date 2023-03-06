<template>
  <div class="h-full w-full flex flex-col justify-center items-left p-4 gap-2">
    <div class="text-2xl font-semibold">Edit Budget</div>
    <input
      type="text"
      class="p-2 border-2 border-secondary"
      v-model="internal.name"
      placeholder="Category"
    />
    <input
      type="text"
      class="p-2 border-2 border-secondary"
      placeholder="Amount Allocation"
      v-model="internal.amount_allocation"
    />
    <Selector
      :options="['in', 'out']"
      :activeOption="internal.transaction_type"
      @selectOption="(val)=>{
        internal.transaction_type = val;
      }"  
    />
    <div class="flex w-full justify-between gap-2">
      <button
        @click="submit('editItem')"
        class="p-2 border-2 border-secondary font-bold w-full"
      >
        Edit
      </button>
      <button
        @click="submit('deleteItem')"
        class="p-2 bg-red-400 text-white font-bold w-full"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Selector from '@/components/ui/Selector.vue';
import type { BudgetItem } from '@/models/Budget.model';
import { ref, type Ref } from 'vue';


type Props = {
  budget_item: BudgetItem;
};

const props = defineProps<Props>();

const internal:Ref<BudgetItem> = ref(JSON.parse(JSON.stringify(props.budget_item)));

const emits = defineEmits(['deleteItem', 'editItem']);

function submit(action: 'editItem' | 'deleteItem') {
  emits(action, internal.value);
}
</script>
