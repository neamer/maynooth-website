import React from "react";
import { useDispatch } from "react-redux";

import { removeProduct, changeAmount } from "../../redux/basket/basketActions";

import "./BasketProductResp.css";

function BasketProductResp(props) {
  const dispatch = useDispatch();

  return (
    <div className="basket-table-row">
      <div className="r-basket-table-top">
        <div>
          <div
            className="basket-table-pic"
            style={{ backgroundImage: `url(${props.product.picture})` }}
          ></div>
        </div>
        <div className="basket-table-info">
          <h3 className="basket-table-name">{props.product.name}</h3>
          <p className="basket-table-color">{props.product.color.name}</p>
          <div className="basket-table-price">${props.product.price}</div>
        </div>
      </div>
      <div className="r-basket-table-bottom">
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
        <button
          className="basket-table-remove"
          onClick={() => dispatch(removeProduct(props.product.name))}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default BasketProductResp;
