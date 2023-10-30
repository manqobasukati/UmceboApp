
import { defineStore } from "pinia";
import actions from "./actions";
import getters from "./getters";
import type { TransactionItem } from "@/models/Transaction.model";


// import type { Router } from "@/models/Router.model";


export type TransactionState = {
  active_transaction_item: TransactionItem | null,
  transaction_items: TransactionItem[] | null;

};

const useTransactionStore = defineStore({
  id: "transaction",
  state: () => ({ transaction_items:[],active_transaction_item:null } as TransactionState),
  actions: actions,
  getters: getters,
});

export default useTransactionStore
;
