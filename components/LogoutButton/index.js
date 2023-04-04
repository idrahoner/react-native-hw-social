import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux';

export default function LogoutButton({ style }) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...style }}
      onPress={() => dispatch(logoutUser())}
    >
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center' },
});
