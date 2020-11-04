import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import BasketReducer from "./basket/basketReducer";

const store = createStore(
  BasketReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
