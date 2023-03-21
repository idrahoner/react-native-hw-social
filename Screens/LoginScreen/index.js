import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import KeyboardShutter from '../../components/KeyboardShutter';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import LoginForm from '../../components/LoginForm';
import TransparentButton from '../../components/TransparentButton';

const screenDimensions = Dimensions.get('screen');

export default function LoginScreen({ navigation }) {
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
          <LoginForm
            onSubmit={console.log}
            setIsKeyboardOpen={setIsKeyboardOpen}
          />
          <TransparentButton
            title={'Don`t have an account? Sign up'}
            style={{
              marginBottom: isKeyboardOpen
                ? -120
                : Math.floor(dimensions.screen.height / 7),
            }}
            onPress={() => {
              setIsKeyboardOpen(false);
              navigation.navigate('Registration');
            }}
          />
        </FrameRoundedUpperEdge>
      </KeyboardShutter>
    </BackgroundWithImage>
  );
}
