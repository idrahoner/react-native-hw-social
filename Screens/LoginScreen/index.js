import { useState } from 'react';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import KeyboardShutter from '../../components/KeyboardShutter';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import LoginForm from '../../components/LoginForm';

export default function LoginScreen() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  return (
    <BackgroundWithImage>
      <KeyboardShutter setIsKeyboardOpen={setIsKeyboardOpen}>
        <FrameRoundedUpperEdge>
          <LoginForm
            onSubmit={console.log}
            iskeybaordOpen={isKeyboardOpen}
            setIsKeyboardOpen={setIsKeyboardOpen}
          />
        </FrameRoundedUpperEdge>
      </KeyboardShutter>
    </BackgroundWithImage>
  );
}
