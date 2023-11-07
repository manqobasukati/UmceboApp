<template>
  <div class="h-full w-full flex flex-col justify-center items-left p-4 gap-2">
    <div class="text-2xl font-semibold">Edit Transaction</div>
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
    <select
      
      v-model="internal.tag_id"
      class="p-2 border-2 border-secondary"
    >
      
      <option
        v-for="(tag, key) in budgetTags"
        :key="tag.tag_id"
        :value="tag.tag_id"
      >
        {{ tag.name }}
      </option>
    </select>
    <input v-if="false" v-model="internal.tag_id" class="p-2 border-2 border-secondary" list="tags" name="tag"  />
    <datalist id="tags">
     
      <option
       
        v-for="(tag, key) in budgetTags"
        :key="key"
        :value="tag.tag_id"
      >
        {{ tag.name }}
      </option>
    </datalist>
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
import type { TransactionItem } from '@/models/Transaction.model';
import { getUserBudget } from '@/request_handlers/budget';
import { supabase } from '@/supabase';
import { onMounted, ref, type Ref } from 'vue';

type Props = {
  transaction_item: TransactionItem;
};

const props = defineProps<Props>();

const internal: Ref<TransactionItem> = ref(
  JSON.parse(JSON.stringify(props.transaction_item))
);

const budgetTags: Ref<BudgetItem[] | null> = ref(null);

const emits = defineEmits(['deleteItem', 'editItem']);

onMounted(() => {
  supabase.auth.getUser().then((user) => {
    getUserBudget(user.data.user?.id as string).then((tags) => {
      budgetTags.value = tags;
      console.log('Tags');
    });
  });
});

function submit(action: 'editItem' | 'deleteItem') {
  console.log('Edit', internal.value);
  //  emits(action, internal.value);
}
</script>
