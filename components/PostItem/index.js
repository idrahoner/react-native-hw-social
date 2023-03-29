import { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function PostItem({
  navigation,
  imageURI,
  comments,
  likes,
  location,
  isLiked,
  onPressLike,
}) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://source.unsplash.com/random/350x240' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={{ height: 19 }}>
        <Text style={styles.title}>Title</Text>
      </View>
      <View style={styles.imageNavContainer}>
        <View style={styles.imageStatContainer}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => navigation.navigate('CommentsScreen')}
          >
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="black"
              style={{ transform: [{ scaleX: -1 }] }}
            />
            <Text style={styles.navigationTitle}>333</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => onPressLike(!isLiked)}
          >
            <Feather
              name="thumbs-up"
              size={24}
              color={isLiked ? 'orange' : 'black'}
            />
            <Text style={styles.navigationTitle}>333</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('MapScreen')}
        >
          <AntDesign name="enviromento" size={24} color="black" />
          <Text
            style={{
              ...styles.navigationTitle,
              textDecorationLine: 'underline',
            }}
          >
            Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    gap: 8,
    margin: 16,
  },
  imageContainer: {
    height: 240,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: { fontFamily: 'Roboto-medium', fontSize: 16, color: '#212121' },
  imageNavContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  imageStatContainer: { flexDirection: 'row', gap: 24 },
  navigationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  navigationTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: 16,
    color: '#212121',
  },
});
