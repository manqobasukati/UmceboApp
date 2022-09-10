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
  </generic-service-layout>
</template>

<script lang="ts">
import HeadlineValue from '@/components/ui/HeadlineValue.vue';
import IconDetailVertical from '@/components/ui/IconDetailVertical.vue';
import PillTab from '@/components/ui/PillTab.vue';
import { defineComponent, ref } from 'vue';
import GenericServiceLayout from './GenericServiceLayout.vue';

export default defineComponent({
  components: {
    GenericServiceLayout,
    HeadlineValue,
    IconDetailVertical,
    PillTab,
  },
  setup() {
    console.log('TransactionsService');
    const pills = ref(['Expenses', 'Income']);
    const activePill = ref('Income');

    return {
      pills,
      activePill,
    };
  },
});
</script>
