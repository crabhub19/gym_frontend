import api from '../../api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.get("/account/post/");
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

export const addPost = createAsyncThunk(
    'post/addPost',
    async ({postData,config}, { rejectWithValue }) => {
      try {
        const response = await api.post("/account/post/", postData,config);
        return response.data;
        
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const postSlice = createSlice({  
    name: 'post',
    initialState: {
      data: [],
      status: 'idle',
      detail: null,
    },
    reducers: {
      updatePostLikeStatus: (state, action) => {
        const  id  = action.payload;
        const post = state.data.find((p) => p.id === id);
        if (post) {
          post.is_liked = !post.is_liked;
          post.like_count += post.is_liked ? 1 : -1;
        }
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'succeeded';
          })
          .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.detail = action.payload;
          })
          .addCase(addPost.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addPost.fulfilled, (state, action) => {
            state.data.push(action.payload);
            state.status = 'succeeded';
          })
          .addCase(addPost.rejected, (state, action) => {
            state.status = 'failed';
            state.detail = action.payload;
          })
      },
  });
export const { updatePostLikeStatus } = postSlice.actions;
export default postSlice.reducer;