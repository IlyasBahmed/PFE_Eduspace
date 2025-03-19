import React, { useState,useEffect } from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity,Dimensions,TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import Button from "./ReusableComponents/Button"; 
import Input from "./ReusableComponents/Input";
import axios from "axios";
const { width } = Dimensions.get("window");

export default function TroublePassw() {
    const [email,setEmail]=useState("");
    const [error,setError]=useState("");

    const navigation = useNavigation();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handle= async()=>{
        if(email.trim()===""){
           setError("Veuillez entrer l'email")
        }else if(!emailRegex.test(email)){
          setError("Veuillez entrer la format d'email")
        }else{
          try {
            const response = await axios.post('http://localhost:6005/troublepassw', {
                email: email,
            });

            if (response.status===200) {
                navigation.navigate("EditPassword",{email:email})
            } else {
                setError("Cete email n'existe plus dans notre base de donnee");
            }
        } catch (err) {
            setError("Erreur lors de la connexion au serveur");
        }
        }
    }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <Image source={require("../assets/password.png")} />
      <Text style={styles.title}>Trouble logging in ?</Text>
      <Text style={styles.text}> Please enter your email address to verify your account, and you will
      receive a link to reset your password in your Gmail inbox.</Text>
       <Input icon={"envelope"} color="black" placehorder={"enter your login"} onChange={(e)=>(setEmail(e))}/>
       <Text style={{color:'red'}}>{error}</Text>
       <Button text={"Create Account"} onPress={handle}/>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap:20,
    backgroundColor:'white'
  },
  title:{
    fontSize:30,
    fontWeight:'bold'
  },
  text:{
    fontSize:15,
    width:width*0.8,
    paddingHorizontal:10
  },
  input:{
    borderWidth: 2,
  borderColor: "black",
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 10,
  width:width*0.8,
},
button:{
    backgroundColor:'#4CC9FE',
    width: width * 0.8,
    borderRadius:20,
    borderWidth: 1,
    paddingVertical:12,
  },
});
