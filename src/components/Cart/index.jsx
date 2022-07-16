import React from "react";
import { ProductsSummary } from "../ProductsSummary";
import ProductsTable from "../ProductsTable";

const Cart = ({ cartItems }) => {
  return (
    <div className="container">
      <div className="row">
        <aside className="col-lg-9">
          <ProductsTable cartItems={cartItems} />
        </aside>
        <aside className="col-lg-3">
          <ProductsSummary />
        </aside>
      </div>
    </div>
  );
};

export default Cart;
