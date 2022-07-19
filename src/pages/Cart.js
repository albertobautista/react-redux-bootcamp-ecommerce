import React from "react";
import { useSelector } from "react-redux";

import Cart from "../components/Cart";
import NoData from "../components/NoData";
import { cart } from "../redux/slices/cart/selectors";

export const CartPage = () => {
  const cartItems = useSelector(cart);
  return (
    <div className="mt-5">
      {cartItems.length > 0 ? (
        <Cart cartItems={cartItems} />
      ) : (
        <NoData message="Empty cart" />
      )}
    </div>
  );
};
