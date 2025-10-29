export type TransactionType = 'in' | 'out';

export interface BudgetItem {
  category: string;
  month: number;
  year: number;
  amount_allocation: number;
  transaction_type: TransactionType;
  name:string,
  created_at:Date,
  id:string,
  user:any
}


