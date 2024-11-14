import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = import.meta.env.VITE_API_URL;

export const viewPaymentMethod = createAsyncThunk(
    'paymentMethod/viewPaymentMethod', async (accountData, {rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/account/paymentMethod/`); // Adjust the endpoint as needed
            return response.data;
          } catch (error) {
            return rejectWithValue(error.response.data);
          }
    }
)

const paymentMethonSlice = createSlice({
    name: 'paymentMethod',
    initialState: {
      data: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(viewPaymentMethod.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(viewPaymentMethod.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload; // get account to state
        })
        .addCase(viewPaymentMethod.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;   
        });
    },
  });
  
  export default paymentMethonSlice.reducer;