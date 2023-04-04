import { configureStore } from '@reduxjs/toolkit';
import { dimensionsReducer } from './dimensionsSlice';

export const store = configureStore({
  reducer: { dimensions: dimensionsReducer },
});
