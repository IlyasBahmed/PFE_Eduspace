import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Navbar from './ComponentsReutilisable/NavBar';  // Assurez-vous d'importer vos composants
import Footer from './ComponentsReutilisable/Footer';  // Importer le Footer
import VideoCard from './ComponentsReutilisable/VideoCard';  // Importer le Footer


const VideosListPage = () => {
  const videos = [
    {
      thumbnail: require('../../assets/bgr.png'),
      title: 'Top Programming Languages to Learn in 2024',
      subtitle: 'last 10 days',
      views: '50K',
      likes: '1K',
      comments: '100',
      price: '$50',
    },
    {
        thumbnail: require('../../assets/bgr.png'),
        title: 'Top Programming Languages to Learn in 2024',
        subtitle: 'last 10 days',
        views: '50K',
        likes: '1K',
        comments: '100',
        price: '$50',
      },  {
        thumbnail: require('../../assets/bgr.png'),
        title: 'Top Programming Languages to Learn in 2024',
        subtitle: 'last 10 days',
        views: '50K',
        likes: '1K',
        comments: '100',
        price: '$50',
      },  {
        thumbnail: require('../../assets/bgr.png'),
        title: 'Top Programming Languages to Learn in 2024',
        subtitle: 'last 10 days',
        views: '50K',
        likes: '1K',
        comments: '100',
        price: '$50',
      },
    {
      thumbnail: require('../../assets/bgr.png'),
      title: 'Web Development Trends in 2024',
      subtitle: 'last 10 days',
      views: '50K',
      likes: '1K',
      comments: '100',
      price: '$50',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <Navbar avatarUrl={require('../../assets/fondecran.jpg')} />

      {/* ScrollView pour les vidéos */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.lastPublishedText}>List of videos</Text>
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            thumbnail={video.thumbnail}
            title={video.title}
            subtitle={video.subtitle}
            views={video.views}
            likes={video.likes}
            comments={video.comments}
            price={video.price}
            
          />
        ))}
      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingTop: 20,
    paddingBottom: 60, // Ajouter de l'espace pour ne pas chevaucher le footer
  },
  lastPublishedText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
    fontSize:20,
  },
  videoCard: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  videoInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  videoStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  videoStat: {
    fontSize: 12,
    color: 'gray',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default VideosListPage;
