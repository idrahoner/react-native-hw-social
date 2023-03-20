import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function TransparentButton({ title, style, onPress }) {
  return (
    <TouchableOpacity
      style={{ ...styles.transparentButton, ...style }}
      onPress={onPress}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  transparentButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonTitle: { fontFamily: 'Roboto-regular', fontSize: 16, color: '#1B4371' },
});
