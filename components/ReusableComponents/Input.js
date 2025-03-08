import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions ,Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window"); 

export default function Input({icon,color,placehorder,onChange}) {
  return (
       <TouchableOpacity style={styles.input}>
            <Icon name={icon} size={24} color={color} />
       <TextInput placeholder={placehorder} onChangeText={onChange} />
       </TouchableOpacity> 
       )
}
const styles = StyleSheet.create({
    input:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:5,
        gap:20,
        borderRadius:20,
        borderWidth: 1,
        width: width * 0.8,
      },
  });