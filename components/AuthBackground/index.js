import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function AuthBackground({ children }) {
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/photo-bg.jpg')}
        style={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});
