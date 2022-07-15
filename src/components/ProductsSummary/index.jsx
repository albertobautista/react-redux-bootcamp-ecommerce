import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currencyFormat } from "../../utils/currency";
import {
  cartTotalPriceSelector,
  cartTotalSelector,
} from "../../redux/slices/cart/selectors";
import { cleanCart } from "../../redux/slices/cart/cartSlice";

export const ProductsSummary = ({ cartTotalPrice, cartItemsQuantity }) => {
  const total = useSelector(cartTotalSelector);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const dispatch = useDispatch();

  const handleCleanCart = () => {
    dispatch(cleanCart());
  };

  return (
    <div className="card">
      <div className="card-body">
        <dl className="dlist-align ">
          <dd className="text-right text-dark b ml-3">
            <strong>{total}</strong> product
            {total > 1 ? "s" : ""}
          </dd>
        </dl>
        <dl className="dlist-align ">
          <dt>Total: </dt>
          <dd className="text-right text-dark b ml-3">
            <strong>{currencyFormat(totalPrice)}</strong>
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
            onClick={handleCleanCart}
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
