import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { DimensionsContext, useDimensions } from '../../hooks/dimensions';

const screenDimensions = Dimensions.get('screen');

export default function DimensionsProvider({ children }) {
  const [dimensions, setDimensions] = useState({
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ screen }) => {
      setDimensions({ screen });
    });
    return () => subscription?.remove();
  }, []);

  return (
    <DimensionsContext.Provider value={{ dimensions }}>
      {children}
    </DimensionsContext.Provider>
  );
}
