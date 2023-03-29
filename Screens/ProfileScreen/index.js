import { Text, View, ScrollView } from 'react-native';
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
      <ScrollView style={{ flex: 1 }}>
        <FrameRoundedUpperEdge
          style={{
            minHeight: '100%',
            marginTop: Math.round(Number(dimensions.screen.height) * 0.2),
            paddingTop: 92,
          }}
        >
          <AvatarPicker
            name="avatar"
            onAvatarChange={updateUserData}
            defaultAvatar={userAuthData.avatar}
          />
          <LogoutButton style={{ position: 'absolute', top: 22, right: 16 }} />
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'Roboto-medium',
                fontSize: 30,
                color: '#212121',
              }}
            >
              {userAuthData.login || 'Anonymous'}
            </Text>
          </View>
          <View style={{ marginTop: 33 }}>
            {POST_LIST.map(({ imageURI, comments, likes, location }, index) => (
              <PostItem
                key={index}
                navigation={navigation}
                imageURI={`${imageURI}?sig=${index}`}
                comments={comments}
                likes={likes}
                location={location}
              />
            ))}
          </View>
        </FrameRoundedUpperEdge>
      </ScrollView>
    </BackgroundWithImage>
  );
}
