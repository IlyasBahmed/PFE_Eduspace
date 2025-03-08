import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity ,Dimensions} from "react-native";
const { width } = Dimensions.get("window"); 
import Icon from "react-native-vector-icons/FontAwesome"; // Import des icônes

export default function API({text,icon,color}) {
  return (

   <TouchableOpacity style={styles.Button}>
            <Icon name={icon} size={24} color={color}  />
            <Text style={styles.Text2}>{text}</Text>
     </TouchableOpacity>
    
  
)
}
const styles=StyleSheet.create({
    Button:{
        flexDirection:'row',
        borderColor:'black',
        alignItems: "center",
        gap:20,
        borderRadius:20,
        borderWidth: 1,
        width: width * 0.8,
        paddingVertical:12,
        paddingHorizontal:20,
        marginVertical: 5,
        fontWeight:'bold',
      },
})