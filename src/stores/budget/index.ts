import type { BudgetItem, TransactionType } from "@/models/Budget.model";
import { defineStore } from "pinia";
import actions from "./actions";
import getters from "./getters";


// import type { Router } from "@/models/Router.model";


export type BudgetState = {
  active_budget_item: BudgetItem | null,
  budget_items: BudgetItem[] | null;
  active_transaction_type: TransactionType
};

const useBudgetStore = defineStore({
  id: "budget",
  state: () => ({ budget_items:[],active_budget_item:null,active_transaction_type:'in' } as BudgetState),
  actions: actions,
  getters: getters,
});

export default useBudgetStore
;
