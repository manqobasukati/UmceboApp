<template>
  <generic-service-layout :pageTitle="'Transactions'">
    <div class="flex flex-col gap-4 h-full w-full items-center p-4">
      <div class="flex w-full justify-between">
        <headline-value
          title="Total Earned"
          value="47890"
          color="text-success"
        />
        <headline-value title="Total Spend" value="47890" color="text-error" />
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
        <div
          @click="showEditTransactionDialog()"
          class="flex gap-1 items-center w-full justify-between border border-purple-100 rounded-sm p-2"
        >
          <icon-detail-vertical :icon="'attach_money'" :iconSize="'icon-sm'" />
          <div class="flex w-full flex-col">
            <div class="text-md font-bold">Sold chickens</div>
            <div class="text-xs text-gray-300">a month ago</div>
          </div>
          <div class="text-md text-success">+300</div>
        </div>
        <div
          class="flex gap-1 items-center w-full justify-between border border-purple-100 rounded-sm p-2"
        >
          <icon-detail-vertical :icon="'attach_money'" :iconSize="'icon-sm'" />
          <div class="flex w-full flex-col">
            <div class="text-md font-bold">KFC</div>
            <div class="text-xs text-gray-300">a month ago</div>
          </div>
          <div class="text-md text-error">-300</div>
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
        v-if="activeDialogView === 'EditTransaction'"
      ></edit-delete-transaction>
    </dialog-box>
  </generic-service-layout>
</template>

<script lang="ts">
import DialogBox from '@/components/ui/DialogBox.vue';
import HeadlineValue from '@/components/ui/HeadlineValue.vue';
import IconDetailVertical from '@/components/ui/IconDetailVertical.vue';
import PillTab from '@/components/ui/PillTab.vue';
import { defineComponent, ref } from 'vue';
import GenericServiceLayout from './GenericServiceLayout.vue';
import AddTransaction from './TransactionService/AddTransaction.vue';
import EditDeleteTransaction from './TransactionService/EditDeleteTransaction.vue';

export default defineComponent({
  components: {
    GenericServiceLayout,
    HeadlineValue,
    IconDetailVertical,
    PillTab,
    DialogBox,
    AddTransaction,
    EditDeleteTransaction,
  },
  setup() {
    console.log('TransactionsService');
    const pills = ref(['Expenses', 'Income']);
    const activePill = ref('Income');

    const activeDialogView = ref('');

    const showDialogBox = ref(false);

    const showAddTransactionDialog = () => {
      showDialogBox.value = !showDialogBox.value;
      activeDialogView.value = 'AddTransaction';
    };

    const showEditTransactionDialog = () => {
      showDialogBox.value = !showDialogBox.value;
      activeDialogView.value = 'EditTransaction';
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
