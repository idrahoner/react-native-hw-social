import { configureStore } from '@reduxjs/toolkit';
import { dimensionsReducer } from './dimensionsSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: { dimensions: dimensionsReducer, user: userReducer },
});
