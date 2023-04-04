import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { getPosts } from '../../redux';
import UserInfo from '../../components/UserInfo';
import PostItem from '../../components/PostItem';

export default function PostsScreen({ navigation }) {
  const posts = useSelector(getPosts);

  return (
    <ScrollView style={styles.container}>
      <UserInfo />
      <View>
        {posts.map(({ id, imageURI, title, comments, location }) => (
          <PostItem
            key={id}
            navigation={navigation}
            imageURI={imageURI}
            title={title}
            comments={comments}
            location={location}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
