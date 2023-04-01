import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as Location from 'expo-location';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import PrimaryButton from '../../components/PrimaryButton';
import { useImages } from '../../hooks';

export default function CreatePostsScreen({ navigation }) {
  const [cameraRef, setCameraRef] = useState(null);
  const [imageURI, setImageURI] = useState(null);
  const [position, setPosition] = useState(null);
  const [permision, requestPermision] = Camera.useCameraPermissions();
  const { addImage } = useImages();

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
    })();
  }, []);

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
    return null;
  }

  if (!permision.granted) {
    requestPermision();
    return <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />;
  }

  if (position) {
    console.log(position);
  }

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.cameraContainer}>
            <Camera
              style={styles.camera}
              type={CameraType.back}
              ref={setCameraRef}
            >
              <TouchableOpacity style={styles.snapButton} onPress={takePhoto}>
                <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
              </TouchableOpacity>
              {imageURI && (
                <Image
                  source={{ uri: imageURI }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                />
              )}
            </Camera>
            <TouchableOpacity style={styles.loadButton}>
              <Text style={styles.loadTitle}>Load photo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageDataForm}>
            <View style={styles.inputContainer}>
              <TextInput
                style={{ ...styles.inputField, fontFamily: 'Roboto-medium' }}
                placeholder="Title"
                placeholderTextColor="#E8E8E8"
              />
            </View>
            <View style={styles.inputContainer}>
              <AntDesign name="enviromento" size={24} color="#E8E8E8" />
              <TextInput
                style={{ ...styles.inputField, fontFamily: 'Roboto-regular' }}
                placeholder="Location"
                placeholderTextColor="#E8E8E8"
              />
            </View>
          </View>
          <PrimaryButton
            title="publish"
            disabled={!imageURI}
            onPress={() => {
              navigation.navigate('Home');
              addImage({
                id: Date.now(),
                imageURI,
                title: 'Title',
                comments: 0,
                likes: 0,
                location: { title: 'Ohio', position },
              });
              setImageURI(null);
            }}
          />
        </View>
        <TouchableOpacity style={styles.resetButton}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  keyboardShutter: {
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: { width: '100%', gap: 32 },
  camera: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
  },
  snapButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  loadButton: { marginTop: 8, marginRight: 'auto' },
  loadTitle: { fontFamily: 'Roboto-regular', fontSize: 16, color: '#BDBDBD' },
  imageDataForm: { gap: 16 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  inputField: { width: '100%', height: '100%', fontSize: 16, color: '#212121' },
  resetButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
});
