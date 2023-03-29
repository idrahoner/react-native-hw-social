import { useState } from 'react';
import { useDimensions, useUser } from '../../hooks';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import KeyboardShutter from '../../components/KeyboardShutter';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import LoginForm from '../../components/LoginForm';
import TransparentButton from '../../components/TransparentButton';

export default function LoginScreen({ navigation }) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const { dimensions } = useDimensions();
  const { loginUser } = useUser();

  return (
    <BackgroundWithImage>
      <KeyboardShutter setIsKeyboardOpen={setIsKeyboardOpen}>
        <FrameRoundedUpperEdge>
          <LoginForm
            onSubmit={loginUser}
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
