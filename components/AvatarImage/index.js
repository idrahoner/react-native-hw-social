import { Image, StyleSheet } from 'react-native';

export default function AvatarImage({ avatarURI }) {
  return <Image source={{ uri: avatarURI }} style={styles.avatarImage} />;
}

const styles = StyleSheet.create({
  avatarImage: { height: '100%', width: '100%', borderRadius: 16 },
});
