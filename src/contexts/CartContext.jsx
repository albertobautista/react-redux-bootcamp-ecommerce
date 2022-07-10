import { createContext, useEffect, useState } from "react";
import { products } from "../data/products";

export const CartContext = createContext([]);

const newProducts = products.data.products.items
  .slice(0, 5)
  .map((item) => ({ ...item, quantity: 1 }));

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(newProducts);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [cartTotalItems, setCartTotalItems] = useState(cartItems.length);

  const updateItem = (id, newQuantity) => {
    const cartItemsCopy = [...cartItems];
    const cartItemsUpdated = cartItemsCopy.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(cartItemsUpdated);
  };

  const getSubtotal = () => {
    const subtotal = cartItems.map((item) => ({
      id: item.id,
      subtotal: item.price * item.quantity,
    }));
    return subtotal;
  };

  const getTotalPrice = () => {
    const subtotalPrice = getSubtotal();
    const total = subtotalPrice.reduce(
      (total, cartItem) => total + cartItem.subtotal,
      0
    );
    setCartTotalPrice(total);
  };
  const getCartItemsQuantity = () => {
    const subtotal = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    const total = subtotal.reduce(
      (quantity, cartItem) => quantity + cartItem.quantity,
      0
    );
    setCartTotalItems(total);
  };

  useEffect(() => {
    getTotalPrice();
    getCartItemsQuantity();
  }, [cartItems]);

  useEffect(() => {
    getCartItemsQuantity();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotalPrice,
        updateItem,
        cartItemsQuantity: cartTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
