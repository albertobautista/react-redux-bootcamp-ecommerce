import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunks";

const initialState = {
  isLoading: false,
  error: {},
  data: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanProducts: (state, { payload }) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = {};
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { cleanProducts } = productsSlice.actions;
export default productsSlice;
