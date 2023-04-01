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
import CameraView from '../../components/CameraView';

export default function CreatePostsScreen({ navigation }) {
  const [imageURI, setImageURI] = useState(null);
  const [position, setPosition] = useState(null);
  const [imageTitle, setImageTitle] = useState('');
  const [positionLabel, setPositionLabel] = useState('');
  const { addImage } = useImages();

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
    })();
  }, []);

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.cameraContainer}>
            <CameraView
              imageURI={imageURI}
              setImageURI={setImageURI}
              setPosition={setPosition}
            />
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
                value={imageTitle}
                onChangeText={(value) => setImageTitle(value)}
              />
            </View>
            <View style={styles.inputContainer}>
              <AntDesign name="enviromento" size={24} color="#E8E8E8" />
              <TextInput
                style={{ ...styles.inputField, fontFamily: 'Roboto-regular' }}
                placeholder="Location"
                placeholderTextColor="#E8E8E8"
                value={positionLabel}
                onChangeText={(value) => setPositionLabel(value)}
              />
            </View>
          </View>
          <PrimaryButton
            title="Publish"
            disabled={!imageURI}
            onPress={() => {
              navigation.navigate('Home');
              addImage({
                id: Date.now(),
                imageURI,
                title: imageTitle,
                comments: 0,
                likes: 0,
                location: { label: positionLabel, position },
              });
              setImageURI(null);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => {
            setImageURI(null);
            setImageTitle('');
            setPositionLabel('');
          }}
        >
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
