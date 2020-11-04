import { ADD_ITEM, REMOVE_ITEM } from "./basketTypes";

import RemoveByProductName from "../helperFunctions/RemoveProductByName";

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
    // to implement : CHANGE_AMOUNT
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
