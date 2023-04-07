import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

export const createPost = createAsyncThunk(
  'posts/create',
  async (postData, thunkApi) => {
    try {
      const path = 'postImage/' + Date.now().toString();
      const response = await fetch(postData.imageURI);
      const file = await response.blob();
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(ref(storage, path));
      const docRef = await addDoc(collection(db, 'posts'), {
        id: Date.now().toString(),
        imageURL: url,
        title: postData.title,
        location: postData.location,
        owner: postData.owner,
        likes: [],
        comments: [],
      });
      const postItem = doc(db, 'posts', docRef.id);
      const docSnap = await getDoc(postItem);

      if (docSnap.exists()) {
        console.log('docSnap.data()', docSnap.data());
        return docSnap.data();
      }
    } catch (error) {
      console.log('error.message', error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
