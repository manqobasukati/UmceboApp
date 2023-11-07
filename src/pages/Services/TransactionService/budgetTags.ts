import type { BudgetItem } from '@/models/Budget.model';
import { ref, type Ref } from 'vue';

const budgetTags: Ref<BudgetItem[] | null> = ref(null);
