import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';  // Import de l'icône
const { width } = Dimensions.get("window");

const ImpressionsStatistics = ({ icon, title, impressions, clickRate }) => {
  return (
    <View style={styles.container}>
      {/* Titre de la section avec l'icône */}
      <View style={styles.header}>
        <Ionicons name={icon} size={24} color="green" />
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {/* Cartes de données */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Impressions</Text>
        <Text style={styles.cardValue}>{impressions}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Click Rate per Impression</Text>
        <Text style={styles.cardValue}>{clickRate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding:10,
    width: width*0.9,
    margin:10
},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 14,
    color: 'gray',
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ImpressionsStatistics;
