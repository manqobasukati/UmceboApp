<template>
  <generic-service-layout :pageTitle="'Budget'">
    <div class="flex flex-col gap-4 h-full w-full items-center p-4">
      <div class="flex w-full justify-between">
        <headline-value title="Income" value="47890" color="text-success" />
        <headline-value title="Expenses" value="47890" color="text-error" />
      </div>

      <div>
        <icon-detail-vertical
          :icon="'add_circle_outline'"
          :detail="'add'"
          :detailSize="'text-lg'"
          :spaceBetween="'gap'"
          :iconSize="'icon-md'"
          color="text-success"
          @click="showAddTransactionDialog()"
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
      <div class="flex w-full flex-col gap-2">
        <budget-transaction-item
          v-for="(item, key) in [1, 2, 3]"
          :key="key"
          @edit-item="showEditTransactionDialog()"
        />
      </div>
    </div>
    <dialog-box
      @close-dialog-box="showAddTransactionDialog"
      :showDialogBox="showDialogBox"
    >
      <add-budget v-if="activeDialogView === 'AddBudget'"></add-budget>
      <edit-delete-budget
        v-if="activeDialogView === 'EditBudget'"
      ></edit-delete-budget>
    </dialog-box>
  </generic-service-layout>
</template>

<script lang="ts">
import DialogBox from '@/components/ui/DialogBox.vue';
import HeadlineValue from '@/components/ui/HeadlineValue.vue';
import IconDetailVertical from '@/components/ui/IconDetailVertical.vue';
import PillTab from '@/components/ui/PillTab.vue';
import { defineComponent, onMounted, ref, watch } from 'vue';
import GenericServiceLayout from '@/components/ui/GenericServiceLayout.vue';
import AddBudget from './AddBudget.vue';
import EditDeleteBudget from './EditDeleteBudget.vue';
import BudgetTransactionItem from '@/components/ui/BudgetTransactionItem.vue';
import useBudgetStore from '@/stores/budget';
import { BUDGET_ACTIONS } from '@/stores/budget/actions';

export default defineComponent({
  components: {
    GenericServiceLayout,
    HeadlineValue,
    IconDetailVertical,
    PillTab,
    DialogBox,
    AddBudget,
    EditDeleteBudget,
    BudgetTransactionItem,
  },
  setup() {
    console.log('TransactionsService');
    const pills = ref(['Expenses', 'Income']);
    const activePill = ref('Income');

    const budgetStore = useBudgetStore();

    const activeDialogView = ref('');

    const showDialogBox = ref(false);

    budgetStore[BUDGET_ACTIONS.SET_BUDGET_ITEMS]({
      user_id: '66edd2bd-cad4-4fe2-a29e-ab72e5617b43',
      transaction_type: activePill.value,
    });

    
    watch(activePill,(newPill,OldPill)=>{
      
      budgetStore[BUDGET_ACTIONS.SET_BUDGET_ITEMS]({
      user_id: '66edd2bd-cad4-4fe2-a29e-ab72e5617b43',
      transaction_type: newPill,
    });
    })

    const showAddTransactionDialog = () => {
      showDialogBox.value = !showDialogBox.value;
      activeDialogView.value = 'AddBudget';
    };

    const showEditTransactionDialog = () => {
      showDialogBox.value = !showDialogBox.value;
      activeDialogView.value = 'EditBudget';
    };

    return {
      pills,
      activePill,
      showAddTransactionDialog,
      showDialogBox,
      activeDialogView,
      showEditTransactionDialog,
    };
  },
});
</script>
