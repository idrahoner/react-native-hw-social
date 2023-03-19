import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function InputField({
  name,
  placeholder,
  value,
  reference,
  inputMode,
  secure = false,
  onChangeText,
  onSubmitEditing,
  containerStyle = {},
  setIsKeyboardOpen,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#BDBDBD'}
        value={value}
        ref={reference}
        inputMode={inputMode}
        secureTextEntry={secure}
        onChangeText={(value) => onChangeText({ [name]: value })}
        onSubmitEditing={onSubmitEditing}
        onFocus={() => {
          setIsActive(true);
          setIsKeyboardOpen(true);
        }}
        onBlur={() => setIsActive(false)}
        style={{
          ...styles.input,
          backgroundColor: isActive ? '#FFFFFF' : '#F6F6F6',
          borderColor: isActive ? '#FF6C00' : '#E8E8E8',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'Roboto-regular',
  },
});