import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../../api";

export const sendOrder = createAsyncThunk(
  "orders",
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const response = await apiCall.post("/orders");

      return response.data;
    } catch (error) {
      return rejectWithValue({
        isError: true,
        message: "Error, try again later",
      });
    }
  }
);
