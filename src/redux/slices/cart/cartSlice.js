import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: {},
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id } = payload;
      const find = state.cartItems.find((item) => item.id === id);

      if (find) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        state.cartItems.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    updateCartItemQuantity(state, { payload }) {
      const { id, newQuantity } = payload;
      state.cartItems = state.cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      );
    },
    deleteCartItem(state, { payload }) {
      const { id } = payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    cleanCart(state) {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart, deleteCartItem, updateCartItemQuantity, cleanCart } =
  cartSlice.actions;

export default cartSlice;
