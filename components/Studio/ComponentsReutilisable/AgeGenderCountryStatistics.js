import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';  // Icône pour la section

const AgeGenderCountryStatistics = ({ icon, title, data }) => {
  return (
    <View style={styles.container}>
      {/* Titre de la section avec l'icône */}
      <View style={styles.header}>
        <Ionicons name={icon} size={24} color="green" />
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {/* Affichage des catégories Age, Gender, Country */}
      {data.map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryLabel}>{category.name}</Text>
          <View style={styles.progressContainer}>
            <View
              style={[
                styles.progressBar,
                { width: `${category.percentage}%`, backgroundColor: category.color },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
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
  categoryContainer: {
    marginBottom: 10,
  },
  categoryLabel: {
    fontSize: 14,
    color: 'gray',
  },
  progressContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    height: 10,
    overflow: 'hidden',
    marginTop: 5,
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },
});

export default AgeGenderCountryStatistics;
