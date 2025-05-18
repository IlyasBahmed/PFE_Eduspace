import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';  // Utilisation d'Ionicons pour l'icône

const TrafficSources = ({ icon, title, sources }) => {
  return (
    <View style={styles.container}>
      {/* Section Title avec icône */}
      <View style={styles.header}>
        <Ionicons name={icon} size={24} color="green" />
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {/* Affichage des différentes sources de trafic */}
      {sources.map((source, index) => (
        <View key={index} style={styles.sourceContainer}>
          <Text style={styles.sourceLabel}>{source.name}</Text>
          <View style={styles.progressContainer}>
            <View
              style={[
                styles.progressBar,
                { width: `${source.percentage}%`, backgroundColor: source.color },
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
    borderWidth:2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding:10,
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
  sourceContainer: {
    marginBottom: 10,
  },
  sourceLabel: {
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

export default TrafficSources;
