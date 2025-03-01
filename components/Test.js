import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Test() {
  const myData = [
    { id: 1, name: 'Omar' },
    { id: 2, name: 'Ahmed' },
    { id: 3, name: 'Sara' },
    { id: 4, name: 'Fatima' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={myData}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <Text >{item.name}</Text> 
        )}
      />
    </View>
  );
}
const styles=StyleSheet.create(
    {
      container:{
        backgroundColor:'red'
      }  
    }
)

