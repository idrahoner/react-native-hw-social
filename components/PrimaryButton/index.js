import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PrimaryButton({ title, style, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: disabled ? '#F6F6F6' : '#FF6C00',
        ...style,
      }}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text
        style={{ ...styles.title, color: disabled ? '#BDBDBD' : '#FFFFFF' }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 16,
    borderRadius: 100,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-regular',
  },
});
