import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PrimaryButton({ title, style, onPress }) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...style }}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={styles.title}>{title}</Text>
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
    backgroundColor: '#FF6C00',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-regular',
    color: '#FFFFFF',
  },
});
