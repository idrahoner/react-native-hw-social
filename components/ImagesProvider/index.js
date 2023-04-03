import { useState } from 'react';
import { ImagesContext } from '../../hooks';

export default function ImagesProvider({ children }) {
  const [imageList, setImageList] = useState([]);

  const addImage = (imageObject) =>
    setImageList((prevState) => [imageObject, ...prevState]);

  return (
    <ImagesContext.Provider value={{ addImage, imageList }}>
      {children}
    </ImagesContext.Provider>
  );
}
