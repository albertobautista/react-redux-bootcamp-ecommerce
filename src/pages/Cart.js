import React from "react";
import { useContext } from "react";
import Cart from "../components/Cart";
import NoData from "../components/NoData";
import { CartContext } from "../contexts/CartContext";

export const CartPage = () => {
  const { cartItems, cartTotalPrice, cartItemsQuantity } =
    useContext(CartContext);
  return (
    <div className="mt-5">
      {cartItems.length > 0 ? (
        <Cart
          cartItems={cartItems}
          cartTotalPrice={cartTotalPrice}
          cartItemsQuantity={cartItemsQuantity}
        />
      ) : (
        <NoData message="Carrito vacío" />
      )}
    </div>
  );
};
