
import { addTransactionItem, deleteTransactionItem, getUserTransactions, updateTransactionItem } from '@/request_handlers/transactions';
import type { TransactionState } from '.';

import type { TransactionItem } from '@/models/Transaction.model';


export enum TRANSACTION_ACTIONS {
  'SET_TRANSACTION_ITEMS' = 'set_transaction_items',
  'UPDATE_TRANSACTION_ITEM' = 'update_transaction_item',
  'DELETE_TRANSACTION_ITEM' = 'delete_transaction_item',
  'SET_ACTIVE_TRANSACTION_ITEM' = 'set_active_transaction_item',
  'ADD_TRANSACTION_ITEM' = 'ADD_TRANSACTION_ITEM',
}

const actions = {
  [TRANSACTION_ACTIONS.SET_TRANSACTION_ITEMS](
    this: TransactionState,
    values: { user_id: string; transaction_type: string }
  ) {
    return getUserTransactions(values.user_id, values.transaction_type)
      .then((val) => {
        this.transaction_items = val;
        console.log('values=>', val);
      })
      .catch((e) => {
        console.log('Error', e);
      });
  },

  async [TRANSACTION_ACTIONS.DELETE_TRANSACTION_ITEM](
    this: TransactionState,
    values: { transaction_item_id: string }
  ) {
    return deleteTransactionItem(values.transaction_item_id)
      .then(() => {
        this.transaction_items?.splice(
          this.transaction_items.findIndex((v: TransactionItem) => {
            return values.transaction_item_id === v.tag_id;
          }),
          1
        );
      })
      .catch((e) => {
        console.log(e);
      });
  },

  async [TRANSACTION_ACTIONS.UPDATE_TRANSACTION_ITEM](
    this: TransactionState,
    values: { transaction_item: TransactionItem }
  ) {
   
    return updateTransactionItem(values.transaction_item).then((val: TransactionItem) => {
      const itemIndex = this.transaction_items?.findIndex((v) => {
        return v.tag_id === val.tag_id;
      }) as number;
      if (this.transaction_items) {
        this.transaction_items[itemIndex] = val;
        console.log(this.transaction_items);
      }
    });
  },

  [TRANSACTION_ACTIONS.SET_ACTIVE_TRANSACTION_ITEM](
    this: TransactionState,
    values: { transaction_item: TransactionItem }
  ) {
    this.active_transaction_item = values.transaction_item;
  },
  [TRANSACTION_ACTIONS.ADD_TRANSACTION_ITEM](
    this: TransactionState,
    values: { transaction_item: TransactionItem }
  ) {
    return addTransactionItem(values.transaction_item).then(() => {
      this.transaction_items?.push(values.transaction_item);
    });
  },
};

export default actions;
