import type { BudgetItem, TransactionType } from '@/models/Budget.model';
import { supabase } from '@/supabase';

export async function getUserBudget(
  userId: string,
  transactionType?: string
): Promise<BudgetItem[] | any> {
  const date = new Date();
  const { data, error } = await supabase
    .from('budgets')
    .select('*')
    .eq('user_id', userId)
    // .eq('transaction_type', transactionType)
    .eq('month', `${date.getMonth() + 1}`)
    .eq('year', `${date.getFullYear()}`);

  console.log('User budget', data);
  if (data) {
    return data;
  } else {
    throw error;
  }
}

export async function addBudgetItem(params: BudgetItem) {
  const { data, error } = await supabase.from('budgets').insert([params]).select();

  if (data) {
    return data;
  } else {
    throw error;
  }
}

export async function deletBudgetItem(budgetItemId: string) {
  console.log('BudgetId',budgetItemId)
  const { error } = await supabase
    .from('budgets')
    .delete()
    .eq('id', budgetItemId);

  if (error) {
    throw error;
  } 

  return;
}

export async function updateBudgetItem(budgetItem: BudgetItem) {
  const budget:BudgetItem = { ...budgetItem };
  const { data } = await supabase
    .from('budgets')
    .update(budget)
    .eq('id', budget.id);

  let { data: budgets, error } = await supabase
    .from('budgets')
    .select('*')
    .eq('id', budget.id);

  if (budgets) {
    return budgets[0] as BudgetItem;
  }

 
  throw error;
}
