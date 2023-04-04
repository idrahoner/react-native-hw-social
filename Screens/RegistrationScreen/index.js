import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDimensions, registerUser } from '../../redux';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import KeyboardShutter from '../../components/KeyboardShutter';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import RegistrationForm from '../../components/RegistrationForm';
import TransparentButton from '../../components/TransparentButton';

export default function RegistrationScreen({ navigation }) {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const dimensions = useSelector(getDimensions);
  const dispatch = useDispatch();

  const handleSubmit = (userData) => {
    dispatch(registerUser(userData));
  };

  return (
    <BackgroundWithImage>
      <KeyboardShutter setIsKeyboardOpen={setIsKeyboardOpen}>
        <FrameRoundedUpperEdge>
          <RegistrationForm
            onSubmit={handleSubmit}
            setIsKeyboardOpen={setIsKeyboardOpen}
          />
          <TransparentButton
            title={'Already have an account? Sign in'}
            style={{
              marginBottom: isKeyboardOpen
                ? -120
                : Math.floor(dimensions.height / 10),
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
