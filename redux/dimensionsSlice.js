import { createSlice } from '@reduxjs/toolkit';
import { Dimensions } from 'react-native';

const initialDimensions = Dimensions.get('screen');

const dimensionsSlice = createSlice({
  name: 'dimensions',
  initialState: initialDimensions,
  reducers: {
    setDimensions(state, action) {
      state = action.payload;
    },
  },
});

export const { setDimensions } = dimensionsSlice.actions;
export const dimensionsReducer = dimensionsSlice.reducer;
