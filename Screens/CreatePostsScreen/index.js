import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import PrimaryButton from '../../components/PrimaryButton';

export default function CreatePostsScreen() {
  const [permision, requestPermision] = Camera.useCameraPermissions();
  if (!permision) {
    return null;
  }
  if (!permision.granted) {
    return (
      <TouchableOpacity onPress={requestPermision}>
        <Text>Set permision</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} type={CameraType.back}>
            <TouchableOpacity style={styles.snapButton}>
              <MaterialIcons name="camera-alt" size={24} color="black" />
            </TouchableOpacity>
          </Camera>
          <TouchableOpacity style={styles.loadButton}>
            <Text style={styles.loadTitle}>Load photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageDataForm}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Title" />
          </View>
          <View style={styles.inputContainer}>
            <AntDesign name="enviromento" size={24} color="black" />
            <TextInput placeholder="Location" />
          </View>
        </View>
        <PrimaryButton title="publish" disabled />
      </View>
      <TouchableOpacity>
        <Feather name="trash-2" size={24} color="black" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#fff',
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
  loadButton: { marginTop: 8 },
  loadTitle: { fontFamily: 'Roboto-regular', fontSize: 16, color: '#BDBDBD' },
  imageDataForm: { gap: 16 },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
});
