import type { BudgetItem, TransactionType } from '@/models/Budget.model';
import { supabase } from '@/supabase';

export async function getUserBudget(
  userId: string,
  transactionType?: string
): Promise<BudgetItem[] | any> {
  const date = new Date();
  const { data, error } = await supabase
    .from('tags')
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
  const { data, error } = await supabase.from('tags').insert([params]).select();

  if (data) {
    return data;
  } else {
    throw error;
  }
}

export async function deletBudgetItem(budgetItemId: string) {
  console.log(budgetItemId)
  const { error } = await supabase
    .from('tags')
    .delete()
    .eq('tag_id', budgetItemId);

  if (error) {
    throw error;
  } 

  return;
}

export async function updateBudgetItem(budgetItem: BudgetItem) {
  const budget = { ...budgetItem };
  const { data } = await supabase
    .from('tags')
    .update(budget)
    .eq('tag_id', budget.tag_id);

  let { data: tags, error } = await supabase
    .from('tags')
    .select('*')
    .eq('tag_id', budget.tag_id);

  if (tags) {
    return tags[0] as BudgetItem;
  }

 
  throw error;
}
