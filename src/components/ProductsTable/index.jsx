import React from "react";
import ProductTableItem from "../ProductTableItem";
import "./styles.css";
const ProductsTable = ({ cartItems }) => {
  return (
    <div className="card">
      <div className="table-responsive">
        <table className="table table-borderless table-shopping-cart text-center">
          <thead className="text-muted">
            <tr className="small text-uppercase">
              <th scope="col"></th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Subtotal</th>
              <th scope="col" className="text-right d-none d-md-block"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <ProductTableItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
