import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import PostsScreen from '../PostsScreen';
import ProfileScreen from '../ProfileScreen';
import CreatePostsScreen from '../CreatePostsScreen';

const MainTab = createBottomTabNavigator();

export default function Home() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}
              onPress={() => {
                console.log('logout!');
              }}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => (
            <SimpleLineIcons
              name="grid"
              size={24}
              color={'rgba(33, 33, 33, 0.8)'}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('CreatePost');
          },
        })}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 40,
                backgroundColor: '#FF6C00',
                borderRadius: 20,
              }}
            >
              <Fontisto name="plus-a" size={13} color={'#FFFFFF'} />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="user" size={24} color={'rgba(33, 33, 33, 0.8)'} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
