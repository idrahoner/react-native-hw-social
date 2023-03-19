import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import AuthBackground from '../../components/AuthBackground';
import KeyboardShutter from '../../components/KeyboardShutter';
import RegistrationForm from '../../components/RegistrationForm';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';

const screenDimensions = Dimensions.get('screen');

export default function RegistrationScreen() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
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
    <AuthBackground>
      <KeyboardShutter setIsKeyboardOpen={setIsKeyboardOpen}>
        <FrameRoundedUpperEdge>
          <RegistrationForm
            onSubmit={console.log}
            isKeyboardOpen={isKeyboardOpen}
            setIsKeyboardOpen={setIsKeyboardOpen}
          />
        </FrameRoundedUpperEdge>
      </KeyboardShutter>
    </AuthBackground>
  );
}
