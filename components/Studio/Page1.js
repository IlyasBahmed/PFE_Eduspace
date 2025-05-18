import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Navbar from './ComponentsReutilisable/NavBar';  // Assurez-vous d'importer vos composants
import AnalyticsCard from './ComponentsReutilisable/AnalyticsCard';
import VideoCard from './ComponentsReutilisable/VideoCard';
import Footer from './ComponentsReutilisable/Footer';  // Importer le Footer

const Page1 = () => {
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
      title: 'Web Development Trends in 2024',
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
    },  {
      thumbnail: require('../../assets/bgr.png'),
      title: 'Web Development Trends in 2024',
      subtitle: 'last 10 days',
      views: '50K',
      likes: '1K',
      comments: '100',
      price: '$50',
    },  {
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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Navbar avatarUrl={require('../../assets/fondecran.jpg')} />
        <View style={styles.analyticsContainer}>
          <AnalyticsCard
            icon="eye"
            title="Views"
            value="100K"
            trend="Up"
            color="green"
            trendIcon="arrow-up-circle-outline"
          />
          <AnalyticsCard
            icon="hourglass"
            title="Watch time (Hour)"
            value="4K"
            trend="Up"
            color="green"
            trendIcon="arrow-up-circle-outline"
          />
          <AnalyticsCard
            icon="people"
            title="Followers"
            value="60K"
            trend="Down"
            color="green"
            trendIcon="arrow-down-circle-outline"
          />
          <AnalyticsCard
            icon="cash"
            title="Monthly income"
            value="100$"
            trend="Up"
            color="green" 
            trendIcon="arrow-up-circle-outline"
          />
        </View>

        <Text style={styles.lastPublishedText}>Last published</Text>
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
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 60, 
  },
  analyticsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  lastPublishedText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default Page1;
