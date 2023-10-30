
import type { TransactionState } from ".";
import type { TransactionItem } from "@/models/Transaction.model";

export enum BUDGET_GETTERS {
  "GET_TRANSACTION_ITEMS" = "GET_TRANSACTION_ITEMS",
  "GET_ACTIVE_TRANSACTION_ITEM" = "GET_ACTIVE_TRANSACTION_ITEM",

}

const getters:any = {
  [BUDGET_GETTERS.GET_TRANSACTION_ITEMS](this: TransactionState) {
    return this.transaction_items as TransactionItem[];
  },
  [BUDGET_GETTERS.GET_ACTIVE_TRANSACTION_ITEM](this: TransactionState) {
    return this.active_transaction_item;
  },
};

export default getters;
