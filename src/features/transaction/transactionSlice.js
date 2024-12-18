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
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
)

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
      data: [],
      status: "idle",
      detail: null,
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
          state.detail = action.payload.detail;
        })
        .addCase(fetchTransactions.rejected, (state, action) => {
          state.status = "failed";
          state.detail = action.payload.detail;
        });
      builder
        .addCase(addTransaction.pending, (state) => {
          state.status = "loading";
        })
        .addCase(addTransaction.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.data.push(action.payload);
          state.detail = action.payload.detail;
        })
        .addCase(addTransaction.rejected, (state, action) => {
          state.status = "failed";
          state.detail = action.payload.detail;
        });
      },
    });

    export default transactionSlice.reducer;