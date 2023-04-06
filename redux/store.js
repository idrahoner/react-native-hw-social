import { configureStore } from '@reduxjs/toolkit';
import { dimensionsReducer } from './dimensions/dimensionsSlice';
import { userReducer } from './user/userSlice';
import { postsReducer } from './posts/postsSlice';

export const store = configureStore({
  reducer: {
    dimensions: dimensionsReducer,
    user: userReducer,
    posts: postsReducer,
  },
});
