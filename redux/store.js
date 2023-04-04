import { configureStore } from '@reduxjs/toolkit';
import { dimensionsReducer } from './dimensionsSlice';
import { userReducer } from './userSlice';
import { postsReducer } from './postsSlice';

export const store = configureStore({
  reducer: {
    dimensions: dimensionsReducer,
    user: userReducer,
    posts: postsReducer,
  },
});
