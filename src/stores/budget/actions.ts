import type { BudegtItem } from '@/models/Budget.model';
import {
  deletBudgetItem,
  getUserBudget,
  updateBudgetItem,
} from '@/request_handlers/budget';
import type { BudgetState } from '.';

export enum BUDGET_ACTIONS {
  'SET_BUDGET_ITEMS' = 'set_budget_items',
  'UPDATE_BUDGET_ITEM' = 'update_budget_item',
  'DELETE_BUDGET_ITEM' = 'delete_budget_item',
  'SET_ACTIVE_BUDGET_ITEM' = 'set_active_budget_item',
}

const actions = {
  async [BUDGET_ACTIONS.SET_BUDGET_ITEMS](
    this: BudgetState,
    values: { user_id: string,transaction_type:string }
  ) {

    return getUserBudget(values.user_id,values.transaction_type ).then((val)=>{
        this.budget_items = val;
        console.log('values',val);
    }).catch((e)=>{
        console.log(e)
    })
    
  },

  async [BUDGET_ACTIONS.DELETE_BUDGET_ITEM](
    this: BudgetState,
    values: { budget_item_id: string }
  ) {
    return await deletBudgetItem(values.budget_item_id);
  },

  async [BUDGET_ACTIONS.UPDATE_BUDGET_ITEM](
    this: BudgetState,
    values: { budget_item_id: string }
  ) {
    return await updateBudgetItem(values.budget_item_id);
  },

  [BUDGET_ACTIONS.SET_ACTIVE_BUDGET_ITEM](
    this: BudgetState,
    values: { budget_item: BudegtItem }
  ) {
    this.active_budget_item = values.budget_item;
  },
};

export default actions;
