import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { useUser, useDimensions } from '../../hooks';
import { POST_LIST } from '../../postList';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import AvatarPicker from '../../components/AvatarPicker';
import LogoutButton from '../../components/LogoutButton';
import PostItem from '../../components/PostItem';

export default function ProfileScreen({ navigation }) {
  const { updateUserData, userAuthData } = useUser();
  const { dimensions } = useDimensions();

  return (
    <BackgroundWithImage>
      <ScrollView style={styles.scrollContainer}>
        <FrameRoundedUpperEdge
          style={{
            minHeight: '100%',
            marginTop: Math.round(Number(dimensions.screen.height) * 0.2),
          }}
        >
          <AvatarPicker
            name="avatar"
            onAvatarChange={updateUserData}
            defaultAvatar={userAuthData.avatar}
          />
          <LogoutButton style={styles.logoutButton} />
          <View style={styles.contentContainer}>
            <Text style={styles.userLogin}>
              {userAuthData.login || 'Anonymous'}
            </Text>
          </View>
          <View style={styles.postsContainer}>
            {POST_LIST.map(
              ({ imageURI, title, comments, likes, location }, index) => (
                <PostItem
                  key={index}
                  navigation={navigation}
                  imageURI={`${imageURI}?sig=${index}`}
                  title={title}
                  comments={comments}
                  likes={likes}
                  location={location}
                />
              )
            )}
          </View>
        </FrameRoundedUpperEdge>
      </ScrollView>
    </BackgroundWithImage>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  contentContainer: {
    marginTop: 92,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: { position: 'absolute', top: 22, right: 16 },
  userLogin: {
    fontFamily: 'Roboto-medium',
    fontSize: 30,
    color: '#212121',
  },
  postsContainer: { marginTop: 33 },
});
