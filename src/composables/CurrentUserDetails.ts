import { ref } from 'vue';
import type { Ref } from 'vue';
import type { User } from '@/models/User.model';

export function useCurrentUserDetails() {
  const UserDetials: Ref<Partial<User>> = ref({
    name: 'Manqobas',
    surname: 'Sukati',
    email: 'manqobasukzin27@gmail.com',
    phoneNumber: '+26878225637',
  });
  return UserDetials.value;
}
