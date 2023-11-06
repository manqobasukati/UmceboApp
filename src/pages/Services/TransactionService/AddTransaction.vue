<template>
  <div class="h-full w-full flex flex-col justify-center items-left p-4 gap-2">
    <div class="text-2xl font-semibold">Add Transaction</div>
    <input
      type="text"
      class="p-2 border-2 border-secondary"
      placeholder="Category"
    />
    <input
      type="text"
      class="p-2 border-2 border-secondary"
      placeholder="Amount"
    />
    <select class="p-2 border-2 border-secondary">
      
    </select>
    <button class="p-2 bg-secondary text-white font-bold">Submit</button>
  </div>
</template>

<script setup lang="ts">
import Selector from '@/components/ui/Selector.vue';
import type { BudgetItem } from '@/models/Budget.model';
import { getUserBudget } from '@/request_handlers/budget';
import { supabase } from '@/supabase';
import { onMounted, ref, type Ref } from 'vue';

type Props = {
  budget_details: {
    transaction_type: string;
  };
};


const budgetCategory: Ref<BudgetItem> = ref({
  amount_allocation: 0,
  transaction_type: 'in',
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  created_at: new Date(),
  name: '',
} as BudgetItem);

const budgetTags:Ref<BudgetItem[]|null> = ref(null)

const emits = defineEmits(['addBudget','addTransaction']);

onMounted(()=>{
  //getUserBudget()
})

async function submitBudget() {
  try {
    const user_id = await (await supabase.auth.getUser()).data.user?.id;
    console.log(user_id);
    emits('addTransaction', { ...budgetCategory.value, user_id: user_id });
  } catch (e) {
    console.log('catch', e);
  }
}
</script>
