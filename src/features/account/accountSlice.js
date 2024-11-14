import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correctly import the named export
import { setLoading } from '../loading/loadingSlice';
const url = import.meta.env.VITE_API_URL;

// Create async thunk for register
export const register = createAsyncThunk(
    'account/register', async (accountData, { dispatch,rejectWithValue }) => {
      dispatch(setLoading(true));
        try {
            const response = await axios.post(`${url}/account/accounts/`, accountData); // Adjust the endpoint as needed
            return response.data;
          } catch (error) {
            return rejectWithValue(error.response.data);
          }finally { dispatch(setLoading(false)); }
    }
)


// Create async thunk for login
export const loginUser = createAsyncThunk(
  'account/loginUser',
  async (credentials, {dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(`${url}/account/api/token/`, credentials);
      const { access } = response.data;
      const decodedToken = jwtDecode(access);
      const is_staff = decodedToken.is_staff;
      const user_id = decodedToken.user_id;
      // Save access token and admin status to local storage 
      localStorage.setItem('token', access); 
      localStorage.setItem('user_id', user_id); 
      localStorage.setItem('isAdmin', is_staff);
      return {access, user_id, is_staff};
    } catch (error) {
      return rejectWithValue(error.response.data);
    }finally { dispatch(setLoading(false)); }
  }
);

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    data: [],
    user: localStorage.getItem('user_id') || null,
    token: localStorage.getItem('token') || null,
    isAdmin: localStorage.getItem('isAdmin') === 'true',
    status: 'idle',
    error: null,
  },
  reducers: {
    logoutUser(state) {
      state.user = null;
      state.token = null;
      state.isAdmin = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.push(action.payload); // Add new account to state
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;   
      });
      builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user_id;
        state.token = action.payload.access;
        state.isAdmin = action.payload.is_staff;    
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = accountSlice.actions;
export default accountSlice.reducer;