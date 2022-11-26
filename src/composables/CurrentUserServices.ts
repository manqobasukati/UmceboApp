import { ref } from 'vue';

export function useCurrentUserServices() {
  const services = ref([
    'Transactions',
    'Budget',
    'Calculators',
    'Personal',
    'Settings',
    'LogOff'
    // 'Loans',
    // 'Stokvel',
    // 'Investments',
  ]);
  return services;
}
