import { useMemo, useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getDimensions, getUser, getPosts, updateUserData } from '../../redux';
import BackgroundWithImage from '../../components/BackgroundWithImage';
import FrameRoundedUpperEdge from '../../components/FrameRoundedUpperEdge';
import AvatarPicker from '../../components/AvatarPicker';
import LogoutButton from '../../components/LogoutButton';
import PostItem from '../../components/PostItem';

export default function ProfileScreen({ navigation }) {
  const [ownPosts, setOwnPosts] = useState([]);
  const posts = useSelector(getPosts);
  const user = useSelector(getUser);
  const dimensions = useSelector(getDimensions);
  const dispatch = useDispatch();

  useMemo(() => {
    const filteredPosts = posts.filter((post) => post.owner === user.id);
    setOwnPosts(filteredPosts);
  }, [posts]);

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
            {ownPosts.map(
              ({ id, imageURL, title, comments, likes, location }) => (
                <PostItem
                  key={id}
                  navigation={navigation}
                  imageURI={imageURL}
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
