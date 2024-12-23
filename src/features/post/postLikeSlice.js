import api from '../../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addOrRemovePostLike = createAsyncThunk(
    'postLike/addOrRemovePostLike',
    async (postId, { rejectWithValue }) => {
      try {
        const response = await api.post(`/account/post/${postId}/like/`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
)

const postLikeSlice = createSlice({
    name: 'postLike',
    initialState: {
      data: null,
      status: 'idle',
      detail: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addOrRemovePostLike.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addOrRemovePostLike.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
          state.detail = action.payload.detail;
        })
        .addCase(addOrRemovePostLike.rejected, (state, action) => {
          state.status = 'failed';
          state.detail = action.error.message;
        });
      }
    });

  export default postLikeSlice.reducer