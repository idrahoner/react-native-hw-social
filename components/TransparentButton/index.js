import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function TransparentButton({ title, style, onPress }) {
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
    padding: 16,
  },
  title: { fontFamily: 'Roboto-regular', fontSize: 16, color: '#1B4371' },
});
