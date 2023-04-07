import { createSlice } from '@reduxjs/toolkit';
import { createPost } from './postsOperations';

const initialPostsState = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state, action) => {
        return state;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        return state;
      })
      .addCase(createPost.rejected, (state, action) => {
        return state;
      });
  },
});

export const postsReducer = postsSlice.reducer;
