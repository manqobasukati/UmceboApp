export type TransactionType = 'in' | 'out';

export interface BudegtItem {
  category: string;
  month: number;
  year: number;
  amount: number;
  transaction_type: TransactionType;
  name:string,
  created_at:Date,
  tag_id:string
}
