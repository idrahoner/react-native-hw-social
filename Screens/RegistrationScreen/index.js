import { useState } from 'react';
import { useDimensions, useUser } from '../../hooks';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import KeyboardShutter from '../../components/KeyboardShutter';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import RegistrationForm from '../../components/RegistrationForm';
import TransparentButton from '../../components/TransparentButton';

export default function RegistrationScreen({ navigation }) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const { dimensions } = useDimensions();
  const { loginUser } = useUser();

  return (
    <BackgroundWithImage>
      <KeyboardShutter setIsKeyboardOpen={setIsKeyboardOpen}>
        <FrameRoundedUpperEdge>
          <RegistrationForm
            onSubmit={loginUser}
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
