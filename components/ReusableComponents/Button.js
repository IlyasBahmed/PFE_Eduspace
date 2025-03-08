import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from "react-native";

const { width } = Dimensions.get("window"); 
export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={[styles.button,]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
)
}
const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#4CC9FE",
      borderRadius: 20,
      borderWidth: 1,
      width: width * 0.8,
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginVertical: 5,
    },
    text: {
      color: "white",
      fontWeight: "bold",
    },
  });