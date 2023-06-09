import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useUser } from '../../hooks/user';
import LoginScreen from '../../Screens/LoginScreen';
import RegistrationScreen from '../../Screens/RegistrationScreen';
import Home from '../../Screens/Home';
import CreatePostsScreen from '../../Screens/CreatePostsScreen';
import MapScreen from '../../Screens/MapScreen';
import CommentsScreen from '../../Screens/CommentsScreen';
import GoBackButton from '../GoBackButton';

const MainStack = createNativeStackNavigator();

export default function Router() {
  const { isAuthorized } = useUser();

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {!isAuthorized ? (
          <>
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="CreatePost"
              component={CreatePostsScreen}
              options={({ navigation }) => ({
                headerTitle: 'Create post',
                headerBackVisible: false,
                headerLeft: (props) => (
                  <GoBackButton navigation={navigation} {...props} />
                ),
              })}
            />
            <MainStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={({ navigation }) => ({
                headerTitle: 'Map',
                headerBackVisible: false,
                headerLeft: (props) => (
                  <GoBackButton navigation={navigation} {...props} />
                ),
              })}
            />
            <MainStack.Screen
              name="CommentsScreen"
              component={CommentsScreen}
              options={({ navigation }) => ({
                headerTitle: 'Comments',
                headerBackVisible: false,
                headerLeft: (props) => (
                  <GoBackButton navigation={navigation} {...props} />
                ),
              })}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
