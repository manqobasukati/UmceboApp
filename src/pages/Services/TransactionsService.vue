<template>
  <generic-service-layout :pageTitle="'Transactions'">
    <div class="flex flex-col gap-4 h-full w-full items-center p-4">
      <div class="flex w-full justify-between">
        <headline-value
          title="Total Earned"
          :value="47890"
          color="text-success"
        />
        <headline-value title="Total Spent" :value="47890" color="text-error" />
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
        v-if="transactionStore.transaction_items"
        class="flex w-full flex-col gap-1 overflow-scroll"
      >
        <div
          v-for="(transaction, key) in transactionStore.transaction_items"
          :key="key"
        >
          <budget-transaction-item
            :transaction_item="transaction"
            @edit-item="showDialog('EditTransaction', transaction)"
            v-if="transaction.transaction_type === activePill.api"
          />
        </div>
      </div>
    </div>
    <dialog-box
      @close-dialog-box="showAddTransactionDialog"
      :showDialogBox="showDialogBox"
    >
      <add-transaction
        v-if="activeDialogView === 'AddTransaction'"
      ></add-transaction>
      <edit-delete-transaction
        :transaction_item="(transactionStore.active_transaction_item as TransactionItem)"
        v-if="activeDialogView === 'EditTransaction'"
      ></edit-delete-transaction>
    </dialog-box>
  </generic-service-layout>
</template>

<script setup lang="ts">
import DialogBox from '@/components/ui/DialogBox.vue';
import HeadlineValue from '@/components/ui/HeadlineValue.vue';
import IconDetailVertical from '@/components/ui/IconDetailVertical.vue';
import PillTab from '@/components/ui/PillTab.vue';
import { defineComponent, onMounted, ref, type Ref } from 'vue';
import GenericServiceLayout from '@/components/ui/GenericServiceLayout.vue';
import AddTransaction from './TransactionService/AddTransaction.vue';
import EditDeleteTransaction from './TransactionService/EditDeleteTransaction.vue';
import useTransactionStore from '@/stores/transactions';
import { TRANSACTION_ACTIONS } from '@/stores/transactions/actions';

import BudgetTransactionItem from '@/components/ui/BudgetTransactionItem.vue';
import type { TransactionItem } from '@/models/Transaction.model';

const pills = ref([
  { ui: 'Income', api: 'in' },
  { ui: 'Expense', api: 'out' },
]);
const activePill = ref({ ui: 'Income', api: 'in' });

const activeDialogView = ref('');

const showDialogBox = ref(false);

const transactionStore = useTransactionStore();

const showDialog = (view: string, transactionItem?: TransactionItem) => {
  if (transactionItem) {
    transactionStore[TRANSACTION_ACTIONS.SET_ACTIVE_TRANSACTION_ITEM]({
      transaction_item: transactionItem,
    });
  }
  showDialogBox.value = !showDialogBox.value;
  activeDialogView.value = view;

  console.log(transactionStore.active_transaction_item);
};

onMounted(() => {
  transactionStore[TRANSACTION_ACTIONS.SET_TRANSACTION_ITEMS]({
    user_id: '66edd2bd-cad4-4fe2-a29e-ab72e5617b43',
    transaction_type: activePill.value.api,
  });
});

async function handleEditTransaction(value: TransactionItem) {
  transactionStore[TRANSACTION_ACTIONS.UPDATE_TRANSACTION_ITEM]({
    transaction_item: value,
  }).then(() => {
    showDialog('');
  });
}

const showAddTransactionDialog = () => {
  showDialogBox.value = !showDialogBox.value;
  activeDialogView.value = 'AddTransaction';
};

const showEditTransactionDialog = () => {
  showDialogBox.value = !showDialogBox.value;
  activeDialogView.value = 'EditTransaction';
};
</script>
