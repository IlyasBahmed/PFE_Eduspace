import React, { useState, useRef, useEffect } from "react";
import {StyleSheet,Text,ScrollView,View,TextInput,TouchableOpacity,Dimensions,Image} from "react-native";
import { Ionicons, FontAwesome } from 'react-native-vector-icons';
const height=Dimensions.get("window").height;
export default function Page1({avatarUrl}) {
  return (
    <View style={styles.navbar}>
    <View>
      <Image source={require('../../../assets/Studio.png')} style={styles.logo} />
    </View>

    <View style={styles.icons}>
      <Ionicons name="cloud-upload-outline" size={24} color="black"  />
      <Ionicons name="notifications-outline" size={24} color="black"  />
      <FontAwesome name="gear" size={24} color="black" />
      <Image source={avatarUrl} style={styles.avatar} />
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
 
  navbar:{
    marginTop:30,
    flexDirection: 'row',
    gap:10,
    backgroundColor: 'white',
    alignItems: 'center',
 },
 icons:{
    flexDirection:'row',
    gap:15
 },
 avatar: {
  width: 35,
  height: 35,
  borderRadius: 20, 
  resizeMode: 'contain',
},

})