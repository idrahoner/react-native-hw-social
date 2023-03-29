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
          <Text style={styles.login}>{userAuthData.login || 'Anonymous'}</Text>
        </View>
        <View>
          <Text style={styles.email}>
            {userAuthData.email || 'Anonymous@anon.com'}
          </Text>
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
  login: { fontFamily: 'Roboto-bold', fontSize: 13, color: '#212121' },
  email: {
    fontFamily: 'Roboto-regular',
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});
