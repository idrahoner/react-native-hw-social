import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, thunkApi) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log('user', user);
      return { email: user.email, id: user.uid };
    } catch (error) {
      console.log('error', error);
      thunkApi.rejectWithValue(error);
    }
  }
);
