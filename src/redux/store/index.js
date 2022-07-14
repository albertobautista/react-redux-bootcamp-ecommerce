import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth/authSlice";

import productsSlice from "../slices/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    auth: authSlice.reducer,
  },
});
