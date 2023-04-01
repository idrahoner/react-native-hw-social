import { useState } from 'react';
import { ImagesContext } from '../../hooks';

export default function ImagesProvider({ children }) {
  const [imageList, setImageList] = useState([]);

  const addImage = (imageObject) =>
    setImageList((prevState) => [...prevState, imageObject]);

  const getImages = () => {
    return [...imageList].reverse();
  };

  return (
    <ImagesContext.Provider value={{ addImage, getImages }}>
      {children}
    </ImagesContext.Provider>
  );
}
