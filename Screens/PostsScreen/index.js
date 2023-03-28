import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import UserInfo from '../../components/UserInfo';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <UserInfo />
      <Text>This is PostsScreen component!</Text>
      <TouchableOpacity>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="arrowup" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', gap: 16, marginVertical: 16 }}>
        <TouchableOpacity>
          <SimpleLineIcons name="grid" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto name="plus-a" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Feather name="trash-2" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="enviromento" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="camera-alt" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="thumbs-up" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="chatbubble-sharp"
          size={24}
          color="black"
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="chatbubble-outline"
          size={24}
          color="black"
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
