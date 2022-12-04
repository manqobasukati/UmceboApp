import type { BudegtItem } from "@/models/Budget.model";
import { defineStore } from "pinia";
import actions from "./actions";


// import type { Router } from "@/models/Router.model";
// import getters from "./getters";

export type BudgetState = {
  active_budget_item:null | BudegtItem,
  budget_items: null | BudegtItem[];

};

const useBudgetStore = defineStore({
  id: "budget",
  state: () => ({ budget_items:[],active_budget_item:null } as BudgetState),
  actions: actions,
//   getters,
});

export default useBudgetStore
;
