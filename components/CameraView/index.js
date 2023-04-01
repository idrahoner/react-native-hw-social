import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

export default function CameraView({ imageURI, setImageURI, setPosition }) {
  const [cameraRef, setCameraRef] = useState(null);
  const [permision, requestPermision] = Camera.useCameraPermissions();

  const takePhoto = async () => {
    const image = await cameraRef.takePictureAsync();
    const currentPosition = await Location.getCurrentPositionAsync();
    setImageURI(image.uri);
    setPosition({
      latitude: currentPosition.coords.latitude,
      longitude: currentPosition.coords.longitude,
    });
  };

  if (!permision) {
    return <View style={styles.cameraContainer} />;
  }

  if (!permision.granted) {
    requestPermision();
    return <View style={styles.cameraContainer} />;
  }

  return (
    <View style={styles.cameraContainer}>
      {!imageURI ? (
        <>
          <Camera
            style={styles.camera}
            type={CameraType.back}
            ref={setCameraRef}
          />
          <TouchableOpacity
            style={{ ...styles.snapButton, backgroundColor: '#FFFFFF' }}
            onPress={takePhoto}
          >
            <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Image source={{ uri: imageURI }} style={styles.imagePreview} />
          <TouchableOpacity
            style={{
              ...styles.snapButton,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}
            onPress={() => setImageURI(null)}
          >
            <MaterialIcons name="camera-alt" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  snapButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
});
