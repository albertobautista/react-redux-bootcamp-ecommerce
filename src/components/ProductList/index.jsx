import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingProducts,
  productsError,
  productslData,
} from "../../redux/slices/products/selectors";
import { fetchProducts } from "../../redux/slices/products/thunks";

import ProductItem from "../ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(productslData);
  const isLoading = useSelector(isLoadingProducts);
  const error = useSelector(productsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (error.isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-md-start justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
