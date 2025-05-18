import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from 'react-native-vector-icons';
import Navbar from './ComponentsReutilisable/NavBar';  // Keep this import
import Footer from './ComponentsReutilisable/Footer';  

const Comment = () => {
  // Example list of videos with comments and interactions
  const videos = [
    {
      id: '1',
      title: 'Top Programming Languages to Learn in 2024',
      subtitle: 'last 10 days',
      thumbnail: require('../../assets/bgr.png'), // Update with your actual path
      comments: [
        { user: 'sam', text: 'Great video! Loved the content!' },
        { user: 'alex', text: 'This is so helpful, thank you!' }
      ],
      views: '50K',
      likes: '1K',
      dislikes: '100'
    },
    {
      id: '2',
      title: 'Web Development Trends in 2024',
      subtitle: 'last 7 days',
      thumbnail: require('../../assets/bgr.png'), // Update with your actual path
      comments: [
        { user: 'john', text: 'Great video, very informative.' },
        { user: 'david', text: 'I agree with the trends mentioned here!' }
      ],
      views: '75K',
      likes: '2K',
      dislikes: '150'
    },
    {
      id: '3',
      title: 'Web Development Trends in 2024',
      subtitle: 'last 7 days',
      thumbnail: require('../../assets/bgr.png'), // Update with your actual path
      comments: [
        { user: 'john', text: 'Great video, very informative.' },
        { user: 'david', text: 'I agree with the trends mentioned here!' }
      ],
      views: '75K',
      likes: '2K',
      dislikes: '150'
    },   {
      id: '4',
      title: 'Web Development Trends in 2024',
      subtitle: 'last 7 days',
      thumbnail: require('../../assets/bgr.png'), 
      comments: [
        { user: 'john', text: 'Great video, very informative.' },
        { user: 'david', text: 'I agree with the trends mentioned here!' }
      ],
      views: '75K',
      likes: '2K',
      dislikes: '150'
    },
    // Add more videos as needed
  ];

  return (
    <View style={styles.container}>
       <Navbar avatarUrl={require('../../assets/fondecran.jpg')} />
        
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.videoCard}>
            {/* Video Thumbnail */}
            <Image source={item.thumbnail} style={styles.thumbnail} />
            
            <View style={styles.videoDetails}>
              <Text style={styles.videoTitle}>{item.title}</Text>
              <Text style={styles.videoSubtitle}>{item.subtitle}</Text>

              {/* Interaction Buttons (Like, Dislike, Comment) */}
              <View style={styles.interactionRow}>
                <TouchableOpacity style={styles.likeButton}>
                  <Ionicons name="thumbs-up" size={24} color="green" />
                  <Text>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dislikeButton}>
                  <Ionicons name="thumbs-down" size={24} color="red" />
                  <Text>{item.dislikes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.commentButton}>
                  <FontAwesome name="comment" size={24} color="blue" />
                  <Text>{item.comments.length}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.commentsSection}>
                {item.comments.map((comment, index) => (
                  <View key={index} style={styles.comment}>
                    <Text style={styles.commentUser}>{comment.user}:</Text>
                    <Text style={styles.commentText}>{comment.text}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoCard: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  videoDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  interactionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  dislikeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  commentsSection: {
    marginTop: 10,
    paddingLeft: 20,
  },
  comment: {
    marginBottom: 5,
  },
  commentUser: {
    fontWeight: 'bold',
  },
  commentText: {
    marginLeft: 5,
  },
});

export default Comment;
