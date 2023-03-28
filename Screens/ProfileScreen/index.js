import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useUser } from '../../hooks';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import AvatarPicker from '../../components/AvatarPicker';

export default function ProfileScreen() {
  const { updateUserData, userAuthData } = useUser();
  return (
    <BackgroundWithImage style={{ justifyContent: 'flex-end' }}>
      <FrameRoundedUpperEdge style={{ minHeight: '70%' }}>
        <AvatarPicker
          name="avatar"
          onAvatarChange={updateUserData}
          defaultAvatar={userAuthData.avatar}
        />
        <StatusBar style="auto" />
      </FrameRoundedUpperEdge>
    </BackgroundWithImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
