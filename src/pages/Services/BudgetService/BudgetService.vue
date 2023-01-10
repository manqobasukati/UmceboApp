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
      <div
        v-if="budgetItems"
        class="flex w-full flex-col gap-1 overflow-scroll"
      >
        <div v-for="(tag, key) in budgetItems" :key="key">
          <budget-transaction-item
            :budget_item="tag"
            v-if="(tag.transaction_type === activePill.api)"
            @edit-item="showEditTransactionDialog()"
          />
        </div>
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
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import GenericServiceLayout from '@/components/ui/GenericServiceLayout.vue';
import AddBudget from './AddBudget.vue';
import EditDeleteBudget from './EditDeleteBudget.vue';
import BudgetTransactionItem from '@/components/ui/BudgetTransactionItem.vue';
import useBudgetStore from '@/stores/budget';
import { BUDGET_ACTIONS } from '@/stores/budget/actions';
import { BUDGET_GETTERS } from '@/stores/budget/getters';

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
    const pills = ref([
      { ui: 'Income', api: 'in' },
      { ui: 'Expense', api: 'out' },
    ]);
    const activePill = ref({ ui: 'Income', api: 'in' });

    const budgetStore = useBudgetStore();

    const activeDialogView = ref('');

    const showDialogBox = ref(false);

    onMounted(() => {
      budgetStore[BUDGET_ACTIONS.SET_BUDGET_ITEMS]({
        user_id: '66edd2bd-cad4-4fe2-a29e-ab72e5617b43',
        transaction_type: activePill.value.api,
      });
    });

    watch(activePill, (newPill, OldPill) => {
      budgetStore[BUDGET_ACTIONS.SET_BUDGET_ITEMS]({
        user_id: '66edd2bd-cad4-4fe2-a29e-ab72e5617b43',
        transaction_type: newPill.api,
      });
    });

    const showAddTransactionDialog = () => {
      showDialogBox.value = !showDialogBox.value;
      activeDialogView.value = 'AddBudget';
    };

    const showEditTransactionDialog = () => {
      showDialogBox.value = !showDialogBox.value;
      activeDialogView.value = 'EditBudget';
    };

    const budgetItems = computed(() => {
      return budgetStore.budget_items;
    });

    const totalIncome = computed(() => {
      return budgetStore.budget_items?.reduce((a, b) => {
        if (b.transaction_type === 'in') {
          return a + b.amount_allocation;
        }
        return a;
      }, 0);
    });

    const totalExpenses = computed(() => {
      return budgetStore.budget_items?.reduce((a, b) => {
        if (b.transaction_type === 'out') {
          return a + b.amount_allocation;
        }
        return a;
      }, 0);
    });

    return {
      pills,
      activePill,
      showAddTransactionDialog,
      showDialogBox,
      activeDialogView,
      budgetItems,
      totalIncome,
      totalExpenses,
      showEditTransactionDialog,
    };
  },
});
</script>
