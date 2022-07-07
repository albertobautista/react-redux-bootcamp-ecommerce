import React from "react";
import { products } from "../../data/products";
import ProductItem from "../ProductItem";
const ProductList = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-md-start justify-content-center">
        {products.data.products.items.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
