import { useCallback, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

import DimensionsProvider from './components/DimensionsProvider';
import UserProvider from './components/UserProvider';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import Home from './Screens/Home';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import MapScreen from './Screens/MapScreen';
import CommentsScreen from './Screens/CommentsScreen';

SplashScreen.preventAutoHideAsync();
const MainStack = createNativeStackNavigator();

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [fontsLoaded] = useFonts({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <DimensionsProvider>
        <UserProvider>
          <NavigationContainer>
            <MainStack.Navigator>
              {!isAuth ? (
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
        </UserProvider>
      </DimensionsProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
