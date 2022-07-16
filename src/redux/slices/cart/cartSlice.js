import { createSlice } from "@reduxjs/toolkit";
import { sendOrder } from "./thunks";

const initialState = {
  orderLoading: false,
  error: {},
  cartItems: [],
  orderMessage: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id } = payload;
      const isInCart = state.cartItems.find((item) => item.id === id);

      if (isInCart) {
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
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.orderLoading = true;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.orderLoading = false;
        state.orderMessage = action.payload;
        state.error = {};
        state.cartItems = [];
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.orderLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addToCart, deleteCartItem, updateCartItemQuantity, cleanCart } =
  cartSlice.actions;

export default cartSlice;
