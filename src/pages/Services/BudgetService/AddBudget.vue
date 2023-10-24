<template>
  <div class="h-full w-full flex flex-col justify-center items-left p-4 gap-2">
    <div class="text-2xl font-semibold">Add Budget</div>
    <input
      type="text"
      class="p-2 border-2 border-secondary"
      placeholder="Category"
      v-model="budgetCategory.name"
    />
    <input
      type="number"
      v-model="budgetCategory.amount_allocation"
      class="p-2 border-2 border-secondary"
      placeholder="Amount Allocation"
    />
    <Selector
      :options="['in', 'out']"
      @selectOption="
        (value) => {
          budgetCategory.transaction_type = value;
        }
      "
      :activeOption="budgetCategory.transaction_type"
    />

    <button
      @click="submitBudget()"
      class="p-2 bg-secondary text-white font-bold"
    >
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
import Selector from '@/components/ui/Selector.vue';
import type { BudgetItem } from '@/models/Budget.model';
import { supabase } from '@/supabase';
import { ref, type Ref } from 'vue';

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

const emits = defineEmits(['addBudget']);

async function submitBudget() {
  try {
    const user_id = await (await supabase.auth.getUser()).data.user?.id;
    console.log(user_id);
    emits('addBudget', { ...budgetCategory.value, user_id: user_id });
  } catch (e) {
    console.log('catch', e);
  }
}
</script>
