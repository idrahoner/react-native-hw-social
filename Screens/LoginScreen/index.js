import { useState } from 'react';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import KeyboardShutter from '../../components/KeyboardShutter';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import LoginForm from '../../components/LoginForm';
import TransparentButton from '../../components/TransparentButton';

export default function LoginScreen({ navigation }) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  return (
    <BackgroundWithImage>
      <KeyboardShutter setIsKeyboardOpen={setIsKeyboardOpen}>
        <FrameRoundedUpperEdge>
          <LoginForm
            onSubmit={console.log}
            isKeyboardOpen={isKeyboardOpen}
            setIsKeyboardOpen={setIsKeyboardOpen}
          />
          <TransparentButton
            title={'Don`t have an account? Sign up'}
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
