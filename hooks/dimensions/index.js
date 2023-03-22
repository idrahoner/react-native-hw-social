import { createContext, useContext } from 'react';

export const DimensionsContext = createContext();

export const useDimensions = () => useContext(DimensionsContext);
