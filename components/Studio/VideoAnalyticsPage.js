import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Navbar from './ComponentsReutilisable/NavBar';  
import Footer from './ComponentsReutilisable/Footer'; 
import ImpressionsStatistics from './ComponentsReutilisable/ImpressionsStatistics';  
import TrafficSources from './ComponentsReutilisable/TrafficSources';  
import AgeGenderCountryStatistics from './ComponentsReutilisable/AgeGenderCountryStatistics'; 
import AnalyticsCard from './ComponentsReutilisable/AnalyticsCard'; 
import ChannelAnalytics from './ChannelAnalytics';  // Assurez-vous d'importer ce composant

const VideoAnalyticsPage = () => {

  // Données dynamiques pour les statistiques
  const trafficData = [
    { name: "Video suggestions", percentage: 60, color: "green" },
    { name: "Recherche", percentage: 30, color: "blue" },
    { name: "Notifications", percentage: 10, color: "gray" },
  ];

  const statisticsData = [
    { name: 'Age', percentage: 80, color: 'green' },
    { name: 'Gender', percentage: 50, color: 'blue' },
    { name: 'Country', percentage: 70, color: 'purple' },
  ];

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Navbar avatarUrl={require('../../assets/fondecran.jpg')} />
        <Text style={styles.text}>Top Programming Languages to Learn in 2024 (For High-paying Jobs)</Text>
        <View style={styles.hr} />
       

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Video Analytics</Text>
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
                title="Watch Time"
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
                title="Income"
                value="100$"
                trend="Up"
                color="green"
                trendIcon="arrow-up-circle-outline"
              />
            </View>

            {/* Impressions Statistics Section */}
            <ImpressionsStatistics
              icon="stats-chart"
              title="Impressions Statistics"
              impressions="1M"
              clickRate="10%"
            />

            {/* Traffic Sources Section */}
            <TrafficSources
              icon="globe"
              title="Traffic Sources"
              sources={trafficData}  // Passer les données des sources de trafic
            />

            {/* Age, Gender, and Country Section */}
            <AgeGenderCountryStatistics
              icon="person"
              title="Age, Gender, Country"
              data={statisticsData}  // Passer les données des statistiques
            />
          </View>
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
    paddingBottom: 80, // Espace pour ne pas chevaucher le footer
  },
  section: {
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 20,
  },
  analyticsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    fontSize: 16,
    color: 'gray',
  },
  activeTab: {
    color: '#4CC9FE',
    borderBottomWidth: 2,
    borderBottomColor: '#4CC9FE',
  },
});

export default VideoAnalyticsPage;
