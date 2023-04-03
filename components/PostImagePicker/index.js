import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PostImagePicker({ imageURI, setImageURI }) {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageURI(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity style={styles.loadButton} onPress={pickImage}>
      <Text style={styles.loadTitle}>
        {imageURI ? 'Edit photo' : 'Load Photo'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loadButton: { marginTop: 8, marginRight: 'auto' },
  loadTitle: { fontFamily: 'Roboto-regular', fontSize: 16, color: '#BDBDBD' },
});
