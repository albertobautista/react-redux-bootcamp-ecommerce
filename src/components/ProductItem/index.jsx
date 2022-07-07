import React from "react";
import { currencyFormat } from "../../utils/currency";

import "./styles.css";

const ProductItem = ({ product }) => {
  const { name, images, description, price, categories } = product;
  return (
    <div className="card product-box">
      <div
        style={{
          margin: 5,
          maxHeight: "230px",
        }}
      >
        <img
          src={images[0]}
          className="card-img-top"
          alt={name}
          style={{
            width: "100%",
            height: "15vw",
            objectFit: "contain",
            maxHeight: "100%",
          }}
        />
      </div>
      <div className="card-body">
        <h5
          className="card-title fw-bold truncate-text"
          style={{ minHeight: "100px" }}
        >
          {name}
        </h5>
        <p className="card-text fst-italic truncate-text">{description}</p>
        <p>
          <b>Category: </b>
          {categories[0]}
        </p>
        <div className="text-end mb-3">
          <p className="card-text fs-5">{currencyFormat(price)}</p>
        </div>
        <div className="text-center d-grid gap-2 col-12 mx-auto">
          <button className="btn btn-outline-primary btn-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
