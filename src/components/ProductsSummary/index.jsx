import React from "react";
import { Link } from "react-router-dom";
import { currencyFormat } from "../../utils/currency";

export const ProductsSummary = ({ cartTotalPrice, cartItemsQuantity }) => {
  return (
    <div className="card">
      <div className="card-body">
        <dl className="dlist-align ">
          <dd className="text-right text-dark b ml-3">
            <strong>{cartItemsQuantity}</strong> product
            {cartItemsQuantity > 1 ? "s" : ""}
          </dd>
        </dl>
        <dl className="dlist-align ">
          <dt>Total: </dt>
          <dd className="text-right text-dark b ml-3">
            <strong>{currencyFormat(cartTotalPrice)}</strong>
          </dd>
        </dl>

        <>
          <hr />
          <Link
            to="/checkout"
            className="btn btn-out btn-success btn-square btn-main"
          >
            Checkout
          </Link>
          <button
            onClick={() => {}}
            className="btn btn-out btn-danger btn-square btn-main mt-2"
          >
            Clean cart
          </button>
          <Link
            to="/products"
            className="btn btn-out btn-secondary btn-square btn-main mt-2"
          >
            Continue shopping
          </Link>
        </>
      </div>
    </div>
  );
};
