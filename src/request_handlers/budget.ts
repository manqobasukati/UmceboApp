import type { BudgetItem, TransactionType } from '@/models/Budget.model';
import { supabase } from '@/supabase';

export async function getUserBudget(
  userId: string,
  transactionType: string
): Promise<BudgetItem[] | any> {
  const date = new Date();
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .eq('user_id', userId)
   // .eq('transaction_type', transactionType)
    .eq('month', `${date.getMonth() + 1}`)
    .eq('year', `${date.getFullYear()}`);

  if (data) {
    return data;
  } else {
    throw error;
  }
}

export async function addBudgetItem(params:BudgetItem) {
    const {data,error} = await supabase.from('tags').insert([params]);

    if(data){
      return data;
    }else{
      throw data;
    }
}

export async function deletBudgetItem(budgetItemId: string) {}

export async function updateBudgetItem(budgetItemId: string) {}

export async function getBudgetItem(budgetItemId: string) {}




