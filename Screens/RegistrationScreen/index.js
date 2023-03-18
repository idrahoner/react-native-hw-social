import { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const initialFormState = { login: '', email: '', password: '' };
const INPUT_TYPES = Object.freeze({
  login: 'login',
  email: 'email',
  password: 'password',
});

export default function RegistrationScreen() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const handleKeyboardClose = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    handleKeyboardClose();
    console.log(formValues);
    setFormValues(initialFormState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoiding}
      >
        <View
          style={{
            ...styles.authFrame,
            paddingBottom: isKeyboardShown ? 32 : 0,
          }}
        >
          <View style={styles.avatar} />
          <Text style={styles.title}>Registration</Text>
          <View style={styles.form}>
            <View>
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor:
                    activeInput === INPUT_TYPES.login ? '#FFFFFF' : '#F6F6F6',
                  borderColor:
                    activeInput === INPUT_TYPES.login ? '#FF6C00' : '#E8E8E8',
                }}
                placeholder={'Login'}
                placeholderTextColor={'#BDBDBD'}
                value={formValues.login}
                onChangeText={(value) => {
                  setFormValues((prevState) => ({
                    ...prevState,
                    login: value,
                  }));
                }}
                onFocus={() => {
                  setActiveInput(INPUT_TYPES.login);
                  setIsKeyboardShown(true);
                }}
                onBlur={() => {
                  setActiveInput(null);
                }}
                onSubmitEditing={() => {
                  emailField.current.focus();
                }}
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor:
                    activeInput === INPUT_TYPES.email ? '#FFFFFF' : '#F6F6F6',
                  borderColor:
                    activeInput === INPUT_TYPES.email ? '#FF6C00' : '#E8E8E8',
                }}
                inputMode={'email'}
                placeholder={'Email'}
                placeholderTextColor={'#BDBDBD'}
                value={formValues.email}
                onChangeText={(value) =>
                  setFormValues((prevState) => ({ ...prevState, email: value }))
                }
                onFocus={() => {
                  setActiveInput(INPUT_TYPES.email);
                  setIsKeyboardShown(true);
                }}
                onBlur={() => {
                  setActiveInput(null);
                }}
                onSubmitEditing={() => {
                  passwordField.current.focus();
                }}
                ref={emailField}
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor:
                    activeInput === INPUT_TYPES.password
                      ? '#FFFFFF'
                      : '#F6F6F6',
                  borderColor:
                    activeInput === INPUT_TYPES.password
                      ? '#FF6C00'
                      : '#E8E8E8',
                }}
                placeholder={'Password'}
                placeholderTextColor={'#BDBDBD'}
                secureTextEntry
                value={formValues.password}
                onChangeText={(value) => {
                  setFormValues((prevState) => ({
                    ...prevState,
                    password: value,
                  }));
                }}
                onFocus={() => {
                  setActiveInput(INPUT_TYPES.password);
                  setIsKeyboardShown(true);
                }}
                onBlur={() => {
                  setActiveInput(null);
                }}
                onSubmitEditing={() => {
                  handleKeyboardClose();
                }}
                ref={passwordField}
              />
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              activeOpacity={0.6}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  authFrame: {
    flex: 0.6,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
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
  input: {
    height: 50,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'Roboto-regular',
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
