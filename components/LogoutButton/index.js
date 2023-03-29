import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from '../../hooks';

export default function LogoutButton({ style }) {
  const { logoutUser } = useUser();

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...style }}
      onPress={logoutUser}
    >
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center' },
});
