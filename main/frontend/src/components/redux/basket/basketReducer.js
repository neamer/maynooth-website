import { ADD_ITEM, CHANGE_AMOUNT, REMOVE_ITEM } from "./basketTypes";

import RemoveByProductName from "../helperFunctions/RemoveProductByName";
import ChangeAmount from "../helperFunctions/ChangeAmount";

const initialState = {
  products: [],
};

const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      let newProducts = state.products.slice();
      newProducts.push(action.payload);
      return {
        products: newProducts,
      };
    }
    case REMOVE_ITEM:
      return {
        products: RemoveByProductName(state.products, action.payload),
      };
    case CHANGE_AMOUNT: {
      return {
        products: ChangeAmount(
          state.products,
          action.payload.name,
          action.payload.newAmount
        ),
      };
    }
    default:
      return state;
  }
};

export default BasketReducer;

/* 
product sample
----
  name,
  color,
  picture,
  price
  quantity
*/
