import { useState, useRef } from 'react';
import { StyleSheet, View, Text, Keyboard } from 'react-native';
import InputField from '../InputField';
import PrimaryButton from '../PrimaryButton';

const initialFormState = { email: '', password: '' };

export default function LoginForm({
  onSubmit,
  isKeyboardOpen,
  setIsKeyboardOpen,
}) {
  const [formValues, setFormValues] = useState(initialFormState);
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
      <Text style={styles.title}>Login</Text>
      <InputField
        name={'email'}
        placeholder={'Email'}
        value={formValues.email}
        onChangeText={handleFieldChange}
        onSubmitEditing={() => {
          passwordField.current.focus();
        }}
        containerStyle={{ marginTop: 32 }}
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
        title={'Login'}
        style={styles.submitButton}
        onPress={handleSubmit}
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
    marginTop: 32,
    textAlign: 'center',
    fontFamily: 'Roboto-medium',
  },
  submitButton: {
    height: 50,
    marginTop: 43,
  },
});
