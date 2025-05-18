import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}><Ionicons name="radio" size={30} color="blue" /></TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}><Ionicons name="chatbubble-ellipses-outline" size={30} color="black" /></TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}><Ionicons name="grid-outline" size={30} color="black" /></TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}><Ionicons name="paper-plane-outline" size={30} color="black" /></TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}><Ionicons name="person-outline" size={30} color="black" /></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  iconButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});