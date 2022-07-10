import React from "react";
import { ProductsSummary } from "../ProductsSummary";
import ProductsTable from "../ProductsTable";

const Cart = ({ cartItems, cartTotalPrice, cartItemsQuantity }) => {
  return (
    <div className="container">
      <div className="row">
        <aside className="col-lg-9">
          <ProductsTable cartItems={cartItems} />
        </aside>
        <aside className="col-lg-3">
          <ProductsSummary
            cartTotalPrice={cartTotalPrice}
            cartItemsQuantity={cartItemsQuantity}
          />
        </aside>
      </div>
    </div>
  );
};

export default Cart;
