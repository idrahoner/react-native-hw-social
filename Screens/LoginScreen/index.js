import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDimensions, loginUser } from '../../redux';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import KeyboardShutter from '../../components/KeyboardShutter';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import LoginForm from '../../components/LoginForm';
import TransparentButton from '../../components/TransparentButton';

export default function LoginScreen({ navigation }) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const dimensions = useSelector(getDimensions);
  const dispatch = useDispatch();

  const handleSubmit = (userData) => {
    dispatch(loginUser(userData));
  };

  return (
    <BackgroundWithImage>
      <KeyboardShutter setIsKeyboardOpen={setIsKeyboardOpen}>
        <FrameRoundedUpperEdge>
          <LoginForm
            onSubmit={handleSubmit}
            setIsKeyboardOpen={setIsKeyboardOpen}
          />
          <TransparentButton
            title={'Don`t have an account? Sign up'}
            style={{
              marginBottom: isKeyboardOpen
                ? -120
                : Math.floor(dimensions.height / 7),
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
