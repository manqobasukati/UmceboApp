<template>
  <generic-service-layout :pageTitle="'Transactions'">
    <div class="flex flex-col h-full w-full items-center justify-center">
      Transactions
    </div>
    <div class="absolute left-0 top-0 h-screen w-screen z-999 bg-black bg-opacity-25"></div>
  </generic-service-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GenericServiceLayout from './GenericServiceLayout.vue';

export default defineComponent({
  components: { GenericServiceLayout },
  setup() {
    console.log('TransactionsService');
  },
});
</script>
