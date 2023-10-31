
import type { TransactionItem } from '@/models/Transaction.model';
import { supabase } from '@/supabase';

export async function getUserTransactions(
  userId: string,
  transactionType: string
): Promise<TransactionItem[] | any> {
  const date = new Date();
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .order('date_created',{ascending:false})
    .eq('user_id', userId);
   
  
  if (data) {
    return data;
  } else {
    throw error;
  }
}

export async function addTransactionItem(params: TransactionItem) {
  const { data, error } = await supabase.from('transactions').insert([params]).select();

  if (data) {
    return data;
  } else {
    throw error;
  }
}

export async function deleteTransactionItem(transactionItemId: string) {
 
  const { error } = await supabase
    .from('transactions')
    .delete()
    .eq('transaction_id', transactionItemId);

  if (error) {
    throw error;
  } 

  return;
}

export async function updateTransactionItem(transactionItem: TransactionItem) {
  const transaction = { ...transactionItem };
  const { data } = await supabase
    .from('transactions')
    .update(transaction)
    .eq('tag_id', transaction.tag_id);

  let { data: transactions, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('transaction_id', transaction.transaction_id);

  if (transactions) {
    return transactions[0] as TransactionItem;
  }

 
  throw error;
}
