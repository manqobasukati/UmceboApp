import type { BudgetItem } from "@/models/Budget.model";
import type { BudgetState } from ".";

export enum BUDGET_GETTERS {
  "GET_BUDGET_ITEMS" = "GET_BUDGET_ITEMS",
  "GET_ACTIVE_BUDGET_ITEM" = "get_active_budget_item",

}

const getters:any = {
  [BUDGET_GETTERS.GET_BUDGET_ITEMS](this: BudgetState) {
    return this.budget_items as BudgetItem[];
  },
  [BUDGET_GETTERS.GET_BUDGET_ITEMS](this: BudgetState) {
    return this.active_budget_item;
  },
};

export default getters;
