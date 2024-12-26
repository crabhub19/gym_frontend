import api from "../../api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserPosts = createAsyncThunk(
    "userPost/fetchUserPosts",
    async (page = 1, { rejectWithValue }) => {
        try {
            const response = await api.get(`/account/post/my_posts/?page=${page}`);
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteUserPost = createAsyncThunk(
    "userPost/deleteUserPost",
    async (postId, { rejectWithValue }) => {
        try {
            const response = await api.delete(`/account/post/my_posts/?post_id=${postId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const userPostSlice = createSlice({
    name: "userPost",
    initialState: {
        data: [],
        status: "idle",
        detail: null,
        next: null, // URL for the next page
        previous: null, // URL for the previous page
        count: 0, // Total number of posts
    },
    reducers: {
        updateUserPostLikeStatus: (state, action) => {
            const  id  = action.payload;
            const post = state.data.find((p) => p.id === id);
            if (post) {
              post.is_liked = !post.is_liked;
              post.like_count += post.is_liked ? 1 : -1;
            }
          },
        deleteUserPostOptimal: (state, action) => {
            const postId = action.payload;
            state.data = state.data.filter((post) => post.id !== postId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPosts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserPosts.fulfilled, (state, action) => {
                const newPosts = action.payload.results.filter(
                    (newPost) => !state.data.some((existingPost) => existingPost.id === newPost.id)
                );
                state.data = [...state.data,...newPosts]; // Append new posts
                state.next = action.payload.next;
                state.previous = action.payload.previous;
                state.count = action.payload.count;
                state.status = "succeeded";
            })
            .addCase(fetchUserPosts.rejected, (state, action) => {
                state.status = "failed";
                state.detail = action.payload;
            });
    },
});
export const { updateUserPostLikeStatus,deleteUserPostOptimal } = userPostSlice.actions;
export default userPostSlice.reducer;
    