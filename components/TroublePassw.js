import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity,Dimensions,TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Utilisation de navigation
import Button from "./ReusableComponents/Button"; 
import Input from "./ReusableComponents/Input";

const { width } = Dimensions.get("window");

export default function TroublePassw() {
    const [input,setInput]=useState("");
    const [error,setError]=useState("");

    const navigation = useNavigation();
     
    const handle=()=>{
        if(input.trim()===""){
           setError("Veuillez entrer l'email")
        }else{
            navigation.navigate("Login2")
        }
    }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <Image source={require("../assets/password.png")} />
      <Text style={styles.title}>Trouble logging in ?</Text>
      <Text style={styles.text}> Please enter your email address to verify your account, and you will
      receive a link to reset your password in your Gmail inbox.</Text>
       <Input icon={"envelope"} color="black" placehorder={"enter your login"} onChange={(e)=>(setInput(e))}/>
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
