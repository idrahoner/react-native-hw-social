import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import TransparentButton from '../TransparentButton';

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
  const [isSecure, setIsSecure] = useState(secure);

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#BDBDBD'}
        value={value}
        ref={reference}
        inputMode={inputMode}
        secureTextEntry={isSecure}
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
      {secure && (
        <TransparentButton
          title={isSecure ? 'Show' : 'Hide'}
          style={{ position: 'absolute', top: 0, right: 0 }}
          onPress={() => {
            setIsSecure(!isSecure);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 50, width: '100%' },
  input: {
    height: '100%',
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'Roboto-regular',
  },
});
