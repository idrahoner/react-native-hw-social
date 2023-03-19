import { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Dimensions,
} from 'react-native';
import AuthBackground from '../../components/AuthBackground';
import InputField from '../../components/InputField';
import AvatarPicker from '../../components/AvatarPicker';

const initialFormState = { login: '', email: '', password: '' };
const screenDimensions = Dimensions.get('screen');

export default function RegistrationScreen() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [dimensions, setDimensions] = useState({
    screen: screenDimensions,
  });
  const emailField = useRef(null);
  const passwordField = useRef(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ screen }) => {
      console.log({ screen });
      setDimensions({ screen });
    });
    return () => subscription?.remove();
  }, []);

  const handleSubmit = () => {
    Keyboard.dismiss();
    console.log(formValues);
    setFormValues(initialFormState);
  };

  const handleInputChange = (inputData) => {
    setFormValues((prevState) => ({ ...prevState, ...inputData }));
  };

  return (
    <AuthBackground>
      <View style={styles.authFrame}>
        <AvatarPicker
          name={'avatar'}
          screenWidth={dimensions.screen.width}
          onAvatarChange={handleInputChange}
        />
        <Text style={styles.title}>Registration</Text>
        <View style={styles.form}>
          <InputField
            name={'login'}
            placeholder={'Login'}
            value={formValues.login}
            onChangeText={handleInputChange}
            onSubmitEditing={() => {
              emailField.current.focus();
            }}
          />
          <InputField
            name={'email'}
            placeholder={'Email'}
            value={formValues.email}
            reference={emailField}
            onChangeText={handleInputChange}
            onSubmitEditing={() => {
              passwordField.current.focus();
            }}
            containerStyle={{ marginTop: 16 }}
          />
          <InputField
            name={'password'}
            placeholder={'Password'}
            value={formValues.password}
            reference={passwordField}
            secure
            onChangeText={handleInputChange}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            containerStyle={{ marginTop: 16 }}
          />
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.6}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthBackground>
  );
}

const styles = StyleSheet.create({
  authFrame: {
    flex: 0.6,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 30,
    marginTop: 92,
    textAlign: 'center',
    fontFamily: 'Roboto-medium',
  },
  form: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'Roboto-regular',
    color: '#FFFFFF',
  },
});
