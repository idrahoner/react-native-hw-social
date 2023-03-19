import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function AuthBackground({ children }) {
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/photo-bg.jpg')}
        style={styles.backgroundImage}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoiding}
          >
            {children}
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  keyboardAvoiding: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
