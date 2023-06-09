import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import AvatarImage from '../AvatarImage';

export default function AvatarPicker({ name, onAvatarChange, defaultAvatar }) {
  const [avatar, setAvatar] = useState(defaultAvatar);

  const pickAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      onAvatarChange({ [name]: result.assets[0].uri });
    }
  };

  return (
    <TouchableOpacity
      style={styles.avatarContainer}
      onPress={pickAvatar}
      activeOpacity={0.6}
    >
      {avatar && <AvatarImage avatarURI={avatar} />}
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
