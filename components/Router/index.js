import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

import { useUser } from '../../hooks/user';
import LoginScreen from '../../Screens/LoginScreen';
import RegistrationScreen from '../../Screens/RegistrationScreen';
import Home from '../../Screens/Home';
import CreatePostsScreen from '../../Screens/CreatePostsScreen';
import MapScreen from '../../Screens/MapScreen';
import CommentsScreen from '../../Screens/CommentsScreen';

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
              options={({ navigation, route }) => ({
                headerBackVisible: false,
                headerLeft: (props) => (
                  <TouchableOpacity
                    {...props}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <AntDesign
                      name="arrowleft"
                      size={24}
                      color="rgba(33, 33, 33, 0.8)"
                    />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={({ navigation, route }) => ({
                headerBackVisible: false,
                headerLeft: (props) => (
                  <TouchableOpacity
                    {...props}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <AntDesign
                      name="arrowleft"
                      size={24}
                      color="rgba(33, 33, 33, 0.8)"
                    />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="CommentsScreen"
              component={CommentsScreen}
              options={({ navigation, route }) => ({
                headerBackVisible: false,
                headerLeft: (props) => (
                  <TouchableOpacity
                    {...props}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <AntDesign
                      name="arrowleft"
                      size={24}
                      color="rgba(33, 33, 33, 0.8)"
                    />
                  </TouchableOpacity>
                ),
              })}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
