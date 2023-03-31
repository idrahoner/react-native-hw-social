import { createContext, useContext } from 'react';

export const ImagesContext = createContext();

export const useImages = () => useContext(ImagesContext);
