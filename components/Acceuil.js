import React,{useEffect,UseState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,TouchableOpacity,ScrollView,FlatList,Picker  } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Acceuil() {
  const navigation = useNavigation(); 
  useEffect(()=>{
    setTimeout(()=>(
      navigation.replace('Page2')
    ), 5000)
  },[])
  return (
<View style={styles.container}>
<Image source={require('../assets/EDUSPACE.png')} /> 

</View>  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     alignItems:'center',
     justifyContent:'center'
    },
  
  });
  