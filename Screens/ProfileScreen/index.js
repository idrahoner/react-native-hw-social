import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getDimensions, getUser, updateUserData } from '../../redux';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import AvatarPicker from '../../components/AvatarPicker';
import LogoutButton from '../../components/LogoutButton';
import PostItem from '../../components/PostItem';
import { useImages } from '../../hooks';

export default function ProfileScreen({ navigation }) {
  const user = useSelector(getUser);
  const dimensions = useSelector(getDimensions);
  const dispatch = useDispatch();
  const { imageList } = useImages();

  return (
    <BackgroundWithImage>
      <ScrollView style={styles.scrollContainer}>
        <FrameRoundedUpperEdge
          style={{
            minHeight: '100%',
            marginTop: Math.round(Number(dimensions.height) * 0.2),
          }}
        >
          <AvatarPicker
            name="avatar"
            onAvatarChange={(userData) => {
              dispatch(updateUserData(userData));
            }}
            defaultAvatar={user.avatar}
          />
          <LogoutButton style={styles.logoutButton} />
          <View style={styles.contentContainer}>
            <Text style={styles.userLogin}>{user.login || 'Anonymous'}</Text>
          </View>
          <View style={styles.postsContainer}>
            {imageList.map(
              ({ id, imageURI, title, comments, likes, location }) => (
                <PostItem
                  key={id}
                  navigation={navigation}
                  imageURI={imageURI}
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
