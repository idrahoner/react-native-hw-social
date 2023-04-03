import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons';
import PrimaryButton from '../../components/PrimaryButton';
import { useImages } from '../../hooks';
import CameraView from '../../components/CameraView';
import PostImagePicker from '../../components/PostImagePicker';
import CreatePostForm from '../../components/CreatePostForm';

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

  const handleFormSubmit = () => {
    navigation.navigate('Posts');
    addImage({
      id: Date.now(),
      imageURI,
      title: imageTitle,
      comments: 0,
      likes: 0,
      location: { label: positionLabel, position },
    });
    setImageURI(null);
  };

  const handleFormReset = () => {
    setImageURI(null);
    setImageTitle('');
    setPositionLabel('');
  };

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
            <PostImagePicker imageURI={imageURI} setImageURI={setImageURI} />
          </View>
          <CreatePostForm
            titleValue={imageTitle}
            onChangeTitle={(value) => {
              setImageTitle(value);
            }}
            positionValue={positionLabel}
            onChangePosition={(value) => {
              setPositionLabel(value);
            }}
          />
          <PrimaryButton
            title="Publish"
            disabled={!imageURI || !imageTitle || !positionLabel}
            onPress={handleFormSubmit}
          />
        </View>
        <TouchableOpacity style={styles.resetButton} onPress={handleFormReset}>
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
  resetButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
});
