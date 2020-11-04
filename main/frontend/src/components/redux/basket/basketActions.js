import { ADD_ITEM } from "./basketTypes";

export const addProduct = (product) => ({
  type: ADD_ITEM,
  payload: product,
});
