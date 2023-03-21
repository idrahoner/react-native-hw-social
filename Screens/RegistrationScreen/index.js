import { useState, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import KeyboardShutter from '../../components/KeyboardShutter';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import RegistrationForm from '../../components/RegistrationForm';
import TransparentButton from '../../components/TransparentButton';

const screenDimensions = Dimensions.get('screen');

export default function RegistrationScreen({ navigation }) {
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
    <BackgroundWithImage>
      <KeyboardShutter setIsKeyboardOpen={setIsKeyboardOpen}>
        <FrameRoundedUpperEdge>
          <RegistrationForm
            onSubmit={console.log}
            isKeyboardOpen={isKeyboardOpen}
            setIsKeyboardOpen={setIsKeyboardOpen}
          />
          <TransparentButton
            title={'Already have an account? Sign in'}
            style={{
              marginBottom: isKeyboardOpen
                ? -120
                : Math.floor(dimensions.screen.height / 10),
            }}
            onPress={() => {
              setIsKeyboardOpen(false);
              navigation.navigate('Login');
            }}
          />
        </FrameRoundedUpperEdge>
      </KeyboardShutter>
    </BackgroundWithImage>
  );
}
