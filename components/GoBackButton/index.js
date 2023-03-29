import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function GoBackButton({ navigation, style, ...props }) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...style }}
      onPress={() => {
        navigation.goBack();
      }}
      {...props}
    >
      <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
