import type { BudgetItem } from '@/models/Budget.model';
import {
  addBudgetItem,
  deletBudgetItem,
  getUserBudget,
  updateBudgetItem,
} from '@/request_handlers/budget';
import type { BudgetState } from '.';
import useBudgetStore from '.';

export enum BUDGET_ACTIONS {
  'SET_BUDGET_ITEMS' = 'set_budget_items',
  'UPDATE_BUDGET_ITEM' = 'update_budget_item',
  'DELETE_BUDGET_ITEM' = 'delete_budget_item',
  'SET_ACTIVE_BUDGET_ITEM' = 'set_active_budget_item',
  'ADD_BUDGET_ITEM' = 'ADD_BUDGET_ITEM',
}

const actions = {
  [BUDGET_ACTIONS.SET_BUDGET_ITEMS](
    this: BudgetState,
    values: { user_id: string; transaction_type: string }
  ) {
    return getUserBudget(values.user_id, values.transaction_type)
      .then((val) => {
        this.budget_items = val;
        console.log('values=>', val);
      })
      .catch((e) => {
        console.log('Error', e);
      });
  },

  async [BUDGET_ACTIONS.DELETE_BUDGET_ITEM](
    this: BudgetState,
    values: { budget_item_id: string }
  ) {
    return deletBudgetItem(values.budget_item_id)
      .then(() => {
        this.budget_items?.splice(
          this.budget_items.findIndex((v: BudgetItem) => {
            return values.budget_item_id === v.tag_id;
          }),
          1
        );
      })
      .catch((e) => {
        console.log(e);
      });
  },

  async [BUDGET_ACTIONS.UPDATE_BUDGET_ITEM](
    this: BudgetState,
    values: { budget_item: BudgetItem }
  ) {
    //stor[BUDGET_ACTIONS.SET_BUDGET_ITEMS]({user_id:values.budget_item.});
    return updateBudgetItem(values.budget_item).then((val: BudgetItem) => {
      const itemIndex = this.budget_items?.findIndex((v) => {
        return v.tag_id === val.tag_id;
      }) as number;
      if (this.budget_items) {
        this.budget_items[itemIndex] = val;
        console.log(this.budget_items);
      }
    });
  },

  [BUDGET_ACTIONS.SET_ACTIVE_BUDGET_ITEM](
    this: BudgetState,
    values: { budget_item: BudgetItem }
  ) {
    this.active_budget_item = values.budget_item;
  },
  [BUDGET_ACTIONS.ADD_BUDGET_ITEM](
    this: BudgetState,
    values: { budget_item: BudgetItem }
  ) {
    try {
      addBudgetItem(values.budget_item);
    } catch (e) {
      console.log('Handle', e);
    }
  },
};

export default actions;
