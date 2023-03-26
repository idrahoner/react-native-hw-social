import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DimensionsProvider from './components/DimensionsProvider';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import Home from './Screens/Home';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import MapScreen from './Screens/MapScreen';

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
                />
                <MainStack.Screen name="MapScreen" component={MapScreen} />
              </>
            )}
          </MainStack.Navigator>
        </NavigationContainer>
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
