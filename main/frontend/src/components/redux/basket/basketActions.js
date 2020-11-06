import { ADD_ITEM, CHANGE_AMOUNT, REMOVE_ITEM } from "./basketTypes";

export const addProduct = (product) => ({
  type: ADD_ITEM,
  payload: product,
});

export const removeProduct = (name) => ({
  type: REMOVE_ITEM,
  payload: name,
});

export const changeAmount = (name, newAmount) => ({
  type: CHANGE_AMOUNT,
  payload: {
    name,
    newAmount,
  },
});
