import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AnalyticsCard from './ComponentsReutilisable/AnalyticsCard';  // Importer le composant AnalyticsCard
import { FontAwesome } from 'react-native-vector-icons';
import Navbar from './ComponentsReutilisable/NavBar';  // Assurez-vous d'importer vos composants
import Footer from './ComponentsReutilisable/Footer';

const WithdrawPage = () => {
  return (
    <View style={styles.container}>
      {/* ScrollView pour organiser les cartes */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Navbar avatarUrl={require('../../assets/fondecran.jpg')} />
        
        {/* Titre de la section */}
        <Text style={styles.title}>Withdraw</Text>

        {/* Cards: Income (Month), Income Sources, CPM, RPM */}
        <View style={styles.cardsContainer}>
          <AnalyticsCard
            icon="cash"
            title="Income (Month)"
            value="100$"
            trend="Up"
            color="green"
            trendIcon="arrow-up-circle-outline"
          />
          <AnalyticsCard
            icon="globe"
            title="Income Sources"
            value="50$"
            trend="Up"
            color="blue"
            trendIcon="arrow-up-circle-outline"
          />
        </View>

        <View style={styles.cardsContainer}>
          <AnalyticsCard
            icon="stats-chart"
            title="CPM"
            value="0.7$"
            trend="Up"
            color="orange"
            trendIcon="arrow-up-circle-outline"
          />
          <AnalyticsCard
            icon="stats-chart"
            title="RPM"
            value="1$"
            trend="Up"
            color="purple"
            trendIcon="arrow-up-circle-outline"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Revenue Per Video</Text>
          <View style={styles.revenuePerVideoContainer}>
            {/* Video 1 */}
            <View style={styles.revenueItem}>
              <Image source={require('../../assets/bgr.png')} style={styles.videoImage} />
              <Text style={styles.revenueText}>
                Top Programming Languages to Learn in 2024 - <Text style={styles.revenueAmount}>50$</Text>
              </Text>
            </View>
            
            {/* Video 2 */}
            <View style={styles.revenueItem}>
              <Image source={require('../../assets/bgr.png')} style={styles.videoImage} />
              <Text style={styles.revenueText}>
                Web Development Trends in 2024 - <Text style={styles.revenueAmount}>50$</Text>
              </Text>
            </View>
            
            {/* Video 3 */}
            <View style={styles.revenueItem}>
              <Image source={require('../../assets/bgr.png')} style={styles.videoImage} />
              <Text style={styles.revenueText}>
                AI Technologies in 2024 - <Text style={styles.revenueAmount}>50$</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* Last Withdraw - Table view */}
        <Text style={styles.sectionTitle}>Last Withdraw</Text>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Date</Text>
            <Text style={styles.tableHeaderText}>Amount</Text>
            <Text style={styles.tableHeaderText}>State</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>25-01-2025</Text>
            <Text style={styles.tableCell}>100$</Text>
            <Text style={styles.tableCell}>In progress</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>26-01-2025</Text>
            <Text style={styles.tableCell}>100$</Text>
            <Text style={styles.tableCell}>In progress</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>27-01-2025</Text>
            <Text style={styles.tableCell}>100$</Text>
            <Text style={styles.tableCell}>In progress</Text>
          </View>
        </View>
      </ScrollView>
      <Footer/>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section:{
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:10,
    marginHorizontal:20,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  revenuePerVideoContainer: {
    marginBottom: 20,
  },
  revenueItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', // Ajouté pour que le texte ne dépasse pas le bord
    justifyContent: 'flex-start', // Empêcher le texte de se chevaucher
  },
  videoImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 8,
  },
  revenueText: {
    fontSize: 16,
    color: '#333',
  },
  revenueAmount: {
    color: '#4CC9FE',
    fontWeight: 'bold',
  },
  tableContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  tableCell: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
});

export default WithdrawPage;
