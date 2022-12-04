import type { BudegtItem, TransactionType } from '@/models/Budget.model';
import { supabase } from '@/supabase';

export async function getUserBudget(
  userId: string,
  transactionType:string
): Promise<BudegtItem[] | any> {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .eq("user_id",userId ).eq("transaction_type",transactionType);

  if (data) {
    return data;
  } else {
    throw error;
  }
}

export async function deletBudgetItem(budgetItemId: string) {}

export async function updateBudgetItem(budgetItemId: string) {}

export async function getBudgetItem(budgetItemId: string) {}
