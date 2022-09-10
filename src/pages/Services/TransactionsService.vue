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
    </div>
  </generic-service-layout>
</template>

<script lang="ts">
import HeadlineValue from '@/components/ui/HeadlineValue.vue';
import IconDetailVertical from '@/components/ui/IconDetailVertical.vue';
import { defineComponent } from 'vue';
import GenericServiceLayout from './GenericServiceLayout.vue';

export default defineComponent({
  components: { GenericServiceLayout, HeadlineValue, IconDetailVertical },
  setup() {
    console.log('TransactionsService');
  },
});
</script>
