import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchTransactions = createAsyncThunk(
    "transaction/fetchTransactions",
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.get("/account/transactions/");
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    });

export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (transactionData, { rejectWithValue }) => {
    try {
      const response = await api.post("/account/transactions/", transactionData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
      data: [],
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchTransactions.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchTransactions.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.data = action.payload;
        })
        .addCase(fetchTransactions.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        });
      },
    });

    export default transactionSlice.reducer;