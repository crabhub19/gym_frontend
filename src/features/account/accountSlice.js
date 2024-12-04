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

export const forgotPassword = createAsyncThunk(
  'account/forgotPassword',
  async (email, {rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/account/api/request-password-reset/`, email);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const validateResetPassword = createAsyncThunk(
  'account/validateResetPassword',
  async (data, {rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/account/api/validate-reset-uuid/`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'account/resetPassword',
  async (data, {rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/account/api/reset-password/`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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
    detail: null,
  },
  reducers: {
    logoutUser(state) {
      state.user = null;
      state.token = null;
      state.isAdmin = false;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
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
        state.detail = action.payload.detail;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.detail = action.payload.detail;   
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
        state.detail = action.payload.detail;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.detail = action.payload.detail;
      });
      builder
      .addCase(forgotPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.detail = action.payload.detail;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.detail = action.payload.detail;
      });
      builder
      .addCase(validateResetPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(validateResetPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.detail = action.payload.detail;
      })
      .addCase(validateResetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.detail = action.payload.detail;
      });
      builder
      .addCase(resetPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.detail = action.payload.detail;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.detail = action.payload.detail;
      });
  },
});

export const { logoutUser } = accountSlice.actions;
export default accountSlice.reducer;