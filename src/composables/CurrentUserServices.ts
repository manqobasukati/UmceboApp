import { ref } from 'vue';

export function useCurrentUserServices() {
  const services = ref([
    'Transactions',
    'Budget',
    'Calculators',
    'Personal',
    'Settings',
    // 'Loans',
    // 'Stokvel',
    // 'Investments',
  ]);
  return services;
}
