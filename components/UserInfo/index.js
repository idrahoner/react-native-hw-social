import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '../../hooks';
import AvatarImage from '../AvatarImage';

export default function UserInfo() {
  const { userAuthData } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {userAuthData.avatar && <AvatarImage avatarURI={userAuthData.avatar} />}
      </View>
      <View>
        <View>
          <Text>{userAuthData.login || 'Anonymous'}</Text>
        </View>
        <View>
          <Text>{userAuthData.email || 'Anonymous@anon.com'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 32,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    marginRight: 8,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
});
