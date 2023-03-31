import { StyleSheet, View, ScrollView } from 'react-native';
import UserInfo from '../../components/UserInfo';
import PostItem from '../../components/PostItem';
import { POST_LIST } from '../../postList';
import { useImages } from '../../hooks';

export default function PostsScreen({ navigation }) {
  const { getImages } = useImages();

  return (
    <ScrollView style={styles.container}>
      <UserInfo />
      <View>
        {getImages().map(({ id, imageURI, title, comments, location }) => (
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
      <View>
        {POST_LIST.map(({ imageURI, title, comments, location }, index) => (
          <PostItem
            key={index}
            navigation={navigation}
            imageURI={`${imageURI}?sig=${index}`}
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
