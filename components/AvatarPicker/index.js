import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

export default function AvatarPicker({ name, screenWidth, onAvatarChange }) {
  const [avatar, setAvatar] = useState(null);

  const pickAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      onAvatarChange({ [name]: result.assets[0].uri });
    }
  };

  return (
    <TouchableOpacity style={styles.avatarContainer} onPress={pickAvatar}>
      {avatar && <Image source={{ uri: avatar }} style={styles.avatarImage} />}
      <View
        style={{
          ...styles.avatarButton,
          borderColor: avatar ? '#E8E8E8' : '#FF6C00',
        }}
      >
        {avatar ? (
          <AntDesign name="close" size={16} color="#BDBDBD" />
        ) : (
          <AntDesign name="plus" size={16} color="#FF6C00" />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -60 }],
    marginTop: -60,
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
});
