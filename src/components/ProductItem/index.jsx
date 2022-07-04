import React from "react";
import { currencyFormat } from "../../utils/currency";

import "./styles.css";

const ProductItem = ({ product }) => {
  const { name, images, description, price, categories } = product;
  return (
    <div className="card product-box">
      <div
        style={{
          minHeight: "230px",
          maxHeight: "230px",
        }}
      >
        <img
          src={images[0]}
          className="card-img-top"
          alt={name}
          style={{ width: "100%", height: "15vw", objectFit: "contain" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{ minHeight: "80px" }}>
          {name.substring(0, 80) + "..."}
        </h5>
        <p className="card-text fst-italic">
          {description.substring(0, 90) + "..."}
        </p>
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
    // <div className="ibox">
    //   <div className="ibox-content product-box">
    //     <div className="product-imitation">
    //       <img src={images[0]} alt={name} style={{ width: "100%" }} />
    //     </div>
    //     <div className="product-desc">
    //       <span className="product-price">{currencyFormat(price)} </span>
    //       <h1 className="product-name">{name}</h1>

    //       <div className="small m-t-xs">{description} </div>
    //       <div className="mt-5 text-right" align="center">
    //         <button className="btn btn-primary">Add to cart</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductItem;
