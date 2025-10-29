<template>
  <generic-service-layout :pageTitle="'Budget'">
    <div class="flex flex-col gap-4 h-full w-full items-center p-4">
      <div class="flex w-full justify-between">
        <headline-value
          title="Income"
          :value="totalIncome"
          color="text-success"
        />
        <headline-value
          title="Expenses"
          :value="totalExpenses"
          color="text-error"
        />
      </div>

      <div>
        <icon-detail-vertical
          :icon="'add_circle_outline'"
          :detail="'add'"
          :detailSize="'text-lg'"
          :spaceBetween="'gap'"
          :iconSize="'icon-md'"
          color="text-success"
          @click="showDialog('AddBudget')"
        />
      </div>
      <div class="w-full">
        <pill-tab
          :pills="pills"
          :activePill="activePill"
          @setSelectedPill="
            (val) => {
              activePill = val;
            }
          "
        />
      </div>
      <div
        v-if="budgetStore.budget_items"
        class="flex w-full flex-col gap-1 overflow-scroll"
      >
        <div v-for="(tag, key) in budgetStore.budget_items" :key="key">
          <budget-transaction-item
            :budget_item="tag"
            v-if="tag.transaction_type === activePill.api"
            @edit-item="showDialog('EditBudget', tag)"
          />
        </div>
      </div>
    </div>
    <dialog-box
      @close-dialog-box="showDialog('')"
      :showDialogBox="showDialogBox"
    >
      <add-budget
        v-if="activeDialogView === 'AddBudget'"
        @add-budget="handleAddBudget"
      ></add-budget>
      <edit-delete-budget
        :budget_item="activeBudgetItem"
        @edit-item="handleEditBudget"
        @delete-item="handleDeleteBudget"
        v-if="activeDialogView === 'EditBudget'"
      ></edit-delete-budget>
    </dialog-box>
  </generic-service-layout>
</template>

<script setup lang="ts">
import DialogBox from '@/components/ui/DialogBox.vue';
import HeadlineValue from '@/components/ui/HeadlineValue.vue';
import IconDetailVertical from '@/components/ui/IconDetailVertical.vue';
import PillTab from '@/components/ui/PillTab.vue';
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import GenericServiceLayout from '@/components/ui/GenericServiceLayout.vue';
import AddBudget from './AddBudget.vue';
import EditDeleteBudget from './EditDeleteBudget.vue';
import BudgetTransactionItem from '@/components/ui/BudgetTransactionItem.vue';
import useBudgetStore from '@/stores/budget';
import { BUDGET_ACTIONS } from '@/stores/budget/actions';
import { BUDGET_GETTERS } from '@/stores/budget/getters';
import type { BudgetItem, TransactionType } from '@/models/Budget.model';

const pills = ref([
  { ui: 'Income', api: 'in' },
  { ui: 'Expense', api: 'out' },
]);


const budgetStore = useBudgetStore();
const activePill = ref({ ui: 'Income', api: 'in' });

const activeDialogView = ref('');

const showDialogBox = ref(false);

budgetStore[BUDGET_ACTIONS.SET_ACTIVE_TRANSACTION_TYPE]({ transaction_type: activePill.value.api as TransactionType});



onMounted(() => {
  budgetStore[BUDGET_ACTIONS.SET_BUDGET_ITEMS]({
    user_id: '26dc3e2d-09d3-4081-bf63-2bc36c27cd3e',
    transaction_type: activePill.value.api,
  });
});

watch(activePill, (newPill:any, OldPill:any) => {

  budgetStore[BUDGET_ACTIONS.SET_BUDGET_ITEMS]({
    user_id: '26dc3e2d-09d3-4081-bf63-2bc36c27cd3e',
    transaction_type: newPill.api,
  });

  budgetStore[BUDGET_ACTIONS.SET_ACTIVE_TRANSACTION_TYPE]({ transaction_type: newPill.api as TransactionType});
});

const showAddTransactionDialog = () => {
  showDialogBox.value = !showDialogBox.value;
  activeDialogView.value = 'AddBudget';
};

const showEditTransactionDialog = (item: BudgetItem) => {
  budgetStore[BUDGET_ACTIONS.SET_ACTIVE_BUDGET_ITEM]({ budget_item: item });
  showDialogBox.value = !showDialogBox.value;
  activeDialogView.value = 'EditBudget';
};

const showDialog = (view: string, budgetItem?: BudgetItem) => {
  if (budgetItem) {
    budgetStore[BUDGET_ACTIONS.SET_ACTIVE_BUDGET_ITEM]({
      budget_item: budgetItem,
    });
  }
  showDialogBox.value = !showDialogBox.value;
  activeDialogView.value = view;
};

// const budgetItems = computed(() => {
//   return budgetStore.budget_items;
// });

const totalIncome = computed(() => {
  return budgetStore.budget_items?.reduce((a:number, b:BudgetItem) => {
    if (b.transaction_type === 'in') {
      return a + b.amount_allocation;
    }
    return a;
  }, 0);
});

const totalExpenses = computed(() => {
  return budgetStore.budget_items?.reduce((a:number, b:BudgetItem) => {
    if (b.transaction_type === 'out') {
      return a + b.amount_allocation;
    }
    return a;
  }, 0);
});

function handleAddBudget(value: BudgetItem) {
  console.log('Valuable 1', value);
  budgetStore[BUDGET_ACTIONS.ADD_BUDGET_ITEM]({user_id:'26dc3e2d-09d3-4081-bf63-2bc36c27cd3e', budget_item: value }).then(
    () => {

      showDialog('');
    }
  );
}

async function handleEditBudget(value: BudgetItem) {
  console.log('Update budget', value);
  budgetStore[BUDGET_ACTIONS.UPDATE_BUDGET_ITEM]({
    budget_item: value,
  }).then(() => {
    showDialog('');
  });
}

function handleDeleteBudget(value: BudgetItem) {
  budgetStore[BUDGET_ACTIONS.DELETE_BUDGET_ITEM]({
    budget_item_id: value.id as string,
  }).then(() => {
    showDialog('');
  });
}

const activeBudgetItem = computed(() => {
  return budgetStore[BUDGET_GETTERS.GET_ACTIVE_BUDGET_ITEM];
});
</script>
