import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiCall } from "../../../api";

export const fetchProducts = createAsyncThunk(
  "products",
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const response = await apiCall.get("/products");
      return response.data.items;
    } catch (error) {
      return rejectWithValue({
        isError: true,
        message: "Error, try again later",
      });
    }
  }
);
