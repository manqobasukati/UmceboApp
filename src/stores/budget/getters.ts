import type { BudgetItem } from "@/models/Budget.model";
import type { BudgetState } from ".";

export enum BUDGET_GETTERS {
  "GET_BUDGET_ITEMS" = "GET_BUDGET_ITEMS",
  "GET_ACTIVE_BUDGET_ITEM" = "get_active_budget_item",
  "GET_ACTIVE_TRANSACTION_TYPE" = "get_active_transaction_type"
}

const getters:any = {
  [BUDGET_GETTERS.GET_BUDGET_ITEMS](this: BudgetState) {
    return this.budget_items as BudgetItem[];
  },
  [BUDGET_GETTERS.GET_ACTIVE_BUDGET_ITEM](this: BudgetState) {
    return this.active_budget_item;
  },
  [BUDGET_GETTERS.GET_ACTIVE_TRANSACTION_TYPE](this: BudgetState) {
    return this.active_transaction_type;
  }
};

export default getters;
