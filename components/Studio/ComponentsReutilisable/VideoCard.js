import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const VideoCard = ({ thumbnail, title, subtitle, views, likes, comments, price,onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.replace("VideoAnalyticsPage")}>
      <Image source={thumbnail} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.stats}>
          <Text style={styles.stat}>{views} views</Text>
          <Text style={styles.stat}>{likes} likes</Text>
          <Text style={styles.stat}>{comments} comments</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  stat: {
    fontSize: 12,
    color: 'gray',
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default VideoCard;
