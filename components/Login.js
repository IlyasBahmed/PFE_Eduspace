import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity ,Dimensions} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Utilisation de navigation
import { Button } from "react-native-web";
import Icon from "react-native-vector-icons/FontAwesome"; // Import des icônes
const { width } = Dimensions.get("window"); 
export default function Login() {
  return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')}/>


        <View style={styles.container1}>
        <TouchableOpacity style={styles.Button}>
        <Icon name="google" size={24} color="#DB4437"  />
        <Text style={styles.Text2}>login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
        <Icon name="apple"size={24} color="black"  />
        <Text style={styles.Text2}>login with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
        <Icon name="linkedin"size={24} color="#0077B5" />
        <Text style={styles.Text2}>login with Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
        <Icon name="qrcode"size={24} color="#1877F2 "  />
        <Text style={styles.Text2}>login with QR CODE</Text>
        </TouchableOpacity>
        <Text style={{fontWeight:'bold',fontSize:20}}>OR</Text>

        <TouchableOpacity style={styles.ButtonEmail}>
        <Text style={{color:'white',fontWeight:'bold'}}>Login with Email</Text>
        </TouchableOpacity>
        <Text style={styles.Text2}>You do not have an account?</Text>

        <TouchableOpacity >
        <Text style={{color:'#4CC9FE'}}>Create an account?</Text>
        </TouchableOpacity>
        </View>
        
    </View>
  )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent:'center',
      backgroundColor: "#FFFFFF",
    },
    container1: {
         marginTop:20,
         width: "100%",
         
      alignItems: "center",
      },
    Text: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop:10,
      },
      Text2: {
        fontWeight: "bold",
      },
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
      ButtonEmail:{
        flexDirection:'row',
        borderColor:'black',
        alignItems: "center",
        justifyContent:'center',
        backgroundColor:'#4CC9FE',
        gap:20,
        borderRadius:20,
        borderWidth: 1,
        width: width * 0.8,
        paddingVertical:12,
        paddingHorizontal:20,
        marginVertical: 5,
        fontWeight:'bold',
      }
});
