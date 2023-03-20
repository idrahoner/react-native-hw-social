import { useState, useRef } from 'react';
import { StyleSheet, View, Text, Keyboard } from 'react-native';
import InputField from '../InputField';
import AvatarPicker from '../AvatarPicker';
import PrimaryButton from '../PrimaryButton';
import TransparentButton from '../TransparentButton';

const initialFormState = { login: '', email: '', password: '' };

export default function RegistrationForm({
  onSubmit,
  isKeyboardOpen,
  setIsKeyboardOpen,
}) {
  const [formValues, setFormValues] = useState(initialFormState);
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const handleSubmit = () => {
    Keyboard.dismiss();
    onSubmit(formValues);
    setFormValues(initialFormState);
  };

  const handleFieldChange = (inputData) => {
    setFormValues((prevState) => ({ ...prevState, ...inputData }));
  };

  return (
    <View style={{ ...styles.form, marginBottom: isKeyboardOpen ? 0 : 78 }}>
      <AvatarPicker name={'avatar'} onAvatarChange={handleFieldChange} />
      <Text style={styles.title}>Registration</Text>
      <InputField
        name={'login'}
        placeholder={'Login'}
        value={formValues.login}
        onChangeText={handleFieldChange}
        onSubmitEditing={() => {
          emailField.current.focus();
        }}
        containerStyle={{ marginTop: 33 }}
        setIsKeyboardOpen={setIsKeyboardOpen}
      />
      <InputField
        name={'email'}
        placeholder={'Email'}
        value={formValues.email}
        reference={emailField}
        inputMode={'email'}
        onChangeText={handleFieldChange}
        onSubmitEditing={() => {
          passwordField.current.focus();
        }}
        containerStyle={{ marginTop: 16 }}
        setIsKeyboardOpen={setIsKeyboardOpen}
      />
      <InputField
        name={'password'}
        placeholder={'Password'}
        value={formValues.password}
        reference={passwordField}
        secure
        onChangeText={handleFieldChange}
        onSubmitEditing={() => {
          Keyboard.dismiss();
          setIsKeyboardOpen(false);
        }}
        containerStyle={{ marginTop: 16 }}
        setIsKeyboardOpen={setIsKeyboardOpen}
      />
      <PrimaryButton
        title={'Register'}
        style={styles.submitButton}
        onPress={handleSubmit}
      />
      <TransparentButton
        title={'Already have an account? Sign in'}
        onPress={() => {
          console.log('this is navigation button');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    marginTop: 92,
    textAlign: 'center',
    fontFamily: 'Roboto-medium',
  },
  submitButton: {
    height: 50,
    marginTop: 43,
  },
});
