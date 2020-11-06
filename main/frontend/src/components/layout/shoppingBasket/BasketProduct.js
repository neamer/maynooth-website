import React from "react";
import { useDispatch } from "react-redux";

import { removeProduct, changeAmount } from "../../redux/basket/basketActions";

import "./BasketProduct.css";

function BasketProduct(props) {
  const dispatch = useDispatch();

  return (
    <div className="basket-table-row">
      <div
        className="basket-table-pic"
        style={{ backgroundImage: `url(${props.product.picture})` }}
      ></div>
      <div className="basket-table-info">
        <h3 className="basket-table-name">{props.product.name}</h3>
        <p className="basket-table-color">{props.product.color}</p>
      </div>
      <input
        type="number"
        name="quantity"
        id=""
        value={props.product.quantity}
        className="basket-table-quantity"
        onChange={(e) =>
          dispatch(changeAmount(props.product.name, e.target.value))
        }
      />
      <div className="basket-table-price">${props.product.price}</div>
      <button
        className="basket-table-remove"
        onClick={() => dispatch(removeProduct(props.product.name))}
      >
        REMOVE
      </button>
    </div>
  );
}

export default BasketProduct;
