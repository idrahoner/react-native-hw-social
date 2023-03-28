import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function BackgroundWithImage({ style, children }) {
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/photo-bg.jpg')}
        style={{ ...styles.backgroundImage, ...style }}
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
