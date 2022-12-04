import type { BudgetState } from ".";

export enum BUDGET_GETTERS {
  "GET_BUDGET_ITEMS" = "GET_BUDGET_ITEM",
  "GET_ACTIVE_BUDGET_ITEM" = "get_active_budget_item",
}

const getters = {
  [BUDGET_GETTERS.GET_BUDGET_ITEMS](this: BudgetState) {
    return this.active_budget_item
  },
  [BUDGET_GETTERS.GET_BUDGET_ITEMS](this: BudgetState) {
    return this.active_budget_item;
  },
};

export default getters;
