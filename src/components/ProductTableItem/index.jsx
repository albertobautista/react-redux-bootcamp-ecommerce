import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { currencyFormat } from "../../utils/currency";

const ProductTableItem = ({ cartItem }) => {
  const { updateItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleChangeQuantity = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      updateItem(cartItem.id, newQuantity);
    }
  };
  return (
    <tr className="align-middle">
      <td>
        <figure className="itemside align-items-center">
          <div className="aside">
            <img
              src={cartItem.images[0]}
              className="img-sm"
              alt={cartItem.name}
            />
          </div>
        </figure>
      </td>
      <td>
        <figure className="align-items-center">
          <figcaption className="info">
            <span href="#" className="title text-dark" data-abc="true">
              {cartItem.name}
            </span>
          </figcaption>
        </figure>
      </td>
      <td>
        <div className="">
          <input
            className="form-control"
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </div>
      </td>
      <td>
        <div className="price-wrap">
          <var className="price">{currencyFormat(cartItem.price)}</var>
        </div>
      </td>
      <td>
        <div className="price-wrap ">
          <var className="price">
            {currencyFormat(cartItem.price * quantity)}
          </var>
        </div>
      </td>
      <td>
        <button onClick={() => {}} className="btn btn-light">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ProductTableItem;
