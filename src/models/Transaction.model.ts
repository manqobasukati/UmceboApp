import type { TransactionType } from './Budget.model';

export interface TransactionItem {
  transaction_id: string;
  description: string;
  date_created: Date;
  tag_id: string;
  transaction_type: TransactionType;
  user_id: string;
  amount: number;
}
