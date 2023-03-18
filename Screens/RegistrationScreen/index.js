import { useState, useRef } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

import AuthBackground from '../../components/AuthBackground';
import InputField from '../../components/InputField';

const initialFormState = { login: '', email: '', password: '' };
const INPUT_TYPES = Object.freeze({
  login: 'login',
  email: 'email',
  password: 'password',
});

export default function RegistrationScreen() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [activeInput, setActiveInput] = useState(null);
  const [image, setImage] = useState(null);
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const handleSubmit = () => {
    Keyboard.dismiss();
    console.log(formValues);
    setFormValues(initialFormState);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleInputChange = (inputData) => {
    setFormValues((prevState) => ({ ...prevState, ...inputData }));
  };

  return (
    <AuthBackground>
      <View style={styles.authFrame}>
        <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
          {image && (
            <Image source={{ uri: image }} style={styles.avatarImage} />
          )}
          <View
            style={{
              ...styles.avatarButton,
              borderColor: image ? '#E8E8E8' : '#FF6C00',
            }}
          >
            {image ? (
              <AntDesign name="close" size={16} color="#BDBDBD" />
            ) : (
              <AntDesign name="plus" size={16} color="#FF6C00" />
            )}
          </View>
        </TouchableOpacity>
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
  avatarContainer: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  avatarImage: { height: '100%', width: '100%', borderRadius: 16 },
  avatarButton: {
    position: 'absolute',
    left: 107,
    bottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 50,
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
