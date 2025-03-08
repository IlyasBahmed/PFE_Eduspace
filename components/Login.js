<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import des icônes
import { useNavigation } from '@react-navigation/native'; // Import du hook useNavigation
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const { width } = Dimensions.get("window"); 

export default function Login() {
  const navigation = useNavigation(); // Utilisation du hook useNavigation()

  useEffect(() => {
    navigation.setOptions({ headerShown: false }); // Désactive l'affichage de l'en-tête
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.Login} > Login</Text>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.Button}>
          <Icon name="google" size={24} color="#DB4437" />
          <Text style={styles.Text2}>login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Icon name="apple" size={24} color="black" />
          <Text style={styles.Text2}>login with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} >
          <Icon name="linkedin" size={24} color="#0077B5" />
          <Text style={styles.Text2}>login with Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Scanner")}>
          <Icon name="qrcode" size={24} color="#1877F2 " />
          <Text style={styles.Text2} >login with QR CODE</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>OR</Text>

        <TouchableOpacity style={styles.ButtonEmail}>
          <Text style={{ color: 'white', fontWeight: 'bold',fontSize:20 }}>Login with Email</Text>
        </TouchableOpacity>
        <Text style={styles.Text2}>You do not have an account?</Text>

        <TouchableOpacity>
          <Text style={{ color: '#4CC9FE',fontFamily:"Poppins_600SemiBold",fontSize:20 }}>Create an account?</Text>
=======
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity ,Dimensions} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Utilisation de navigation
import Button from "./ReusableComponents/Button"; 
import API from "./ReusableComponents/API";
const { width } = Dimensions.get("window"); 
export default function Login() {
    const navigation = useNavigation();
  
  return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')}/>
        <View style={styles.container1}>
        <API icon={"google"} text={"login  with Google"} color={"#DB4437"}/>
        <API icon={"apple"} text={"login with Apple"}color={"black"}/>
        <API icon={"linkedin"}text={"login with Linkedin"} color={"#0077B5"}/>
        <API icon={"qrcode"}text={"login with QR CODE"}color={"black"}/>
        <Text style={{fontWeight:'bold',fontSize:20}}>OR</Text>

        <Button text="Login with Email" onPress={() =>( navigation.navigate("Login2"))}/>
        <Text style={styles.Text2}>You do not have an account?</Text>

        <TouchableOpacity onPress={()=>(navigation.navigate("Createaccount"))}>
        <Text style={{color:'#4CC9FE'}}>Create an account?</Text>
>>>>>>> 010c837 (Nouvelle modifications)
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
     paddingTop: verticalScale(10),
  },
  container1: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    gap:5,
    
  },
  Text: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: "PoppinsLight",
  },
  Login:{
    fontFamily:"PoppinsBold",
    fontSize:48,
    marginVertical:verticalScale(20),
    fontWeight:"bold",
  },
  Text2: {
    fontFamily:"Poppins_600SemiBold",
    fontSize:20,
  },
  Button: {
    flexDirection: 'row',
    borderColor: 'black',
    alignItems: "center",
    gap: 20,
    borderRadius: 20,
    borderWidth: 1,
    width: width * 0.8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 5,
    fontFamily: "PoppinsLight",
    shadowColor: "#000", // Couleur de l'ombre (noir)
    shadowOffset: { width: 0, height: 2 }, // Décalage de l'ombre
    shadowOpacity: 0.25, // Opacité de l'ombre (25% de transparence)
    shadowRadius: 3.5,
  },
  ButtonEmail: {
    flexDirection: 'row',
    borderColor: 'black',
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#4CC9FE',
    gap: 20,
    borderRadius: 20,
    borderWidth: 1,
    width: width * 0.8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 5, 
    fontWeight: 'bold',
    fontFamily:"PoppinsLight",
    fontSize:20,
  }
=======
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

>>>>>>> 010c837 (Nouvelle modifications)
});
