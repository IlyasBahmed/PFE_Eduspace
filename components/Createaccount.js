import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity ,Dimensions,TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Utilisation de navigation
import Icon from "react-native-vector-icons/FontAwesome"; // Import des icônes
const { width } = Dimensions.get("window"); 
import Input from "./ReusableComponents/Input";
import Button from "./ReusableComponents/Button";


export default function Createaccount() {
  const [isChecked, setIsChecked] = useState(false);
    const [erreur,setError]=useState("")
    const[user,setUser]=useState("")
    const[email,setEmail]=useState("")
    const[passw,setPassw]=useState("")
    const[passw1,setPassw1]=useState("")

    const handlePage=()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(user.trim===""){
            setError("Veuillez remplir le user")
        }
        else if(email.trim()===""){
            setError("Veuillez remplir l'email")
        }else if(passw.trim()===""){
            setError("Veuillez remplir le password")
        }else if(passw1.trim()===""){
            setError("Veuillez confirmer le password")
        }else if(!emailRegex.test(email)){
            setError("Veuiillez ecrire la format d'email")
        }else if(passw1!==passw){
            setError("Veuillez confirmer par le meme password")
        }else if(isChecked===false){ 
            setError("Veuillez cocher le check box")
        }else {
            setErrorMessage(""); // Réinitialiser les erreurs si tout est valide
            console.log("Formulaire validé:", { user, email, passw });
          }
    }
  return (
      <View style={styles.container}>
   <Image source={require('../assets/logo.png')} style={styles.logo}/>
    <Text style={styles.text}>Create Account</Text>

       <View style={styles.container1}>
       <Input icon={"user"} color="black" placehorder={"enter your login"} onChange={(user)=>(setUser(user))}/>
       <Input icon={"envelope"} color="black" placehorder={"enter your email address"} onChange={(email)=>(setEmail(email))}/>
       <Input icon={"lock"} color="black" placehorder={"enter your email password"} onChange={(password)=>(setPassw(password))}/>
       <Text style={{fontSize:12,paddingLeft:10}}>*The password must be at least 8 characters long.</Text>
       <Text style={{fontSize:12,paddingLeft:10}}>*You cannot use your old password..</Text>
       <Input icon={"lock"} color="black" placehorder={"confirm your email password"} onChange={(password1)=>(setPassw1(password1))}/>

       </View>
       <TouchableOpacity onPress={()=>{setIsChecked(!isChecked)}}  style={styles.checkboxContainer}>
       <Icon name={isChecked ? "check-square" : "square-o"}size={24} color="black" />
       <Text>I acknowledge that I have read, understood, and agree to the terms and conditions.</Text>
       </TouchableOpacity>
       <Button text={"Create Account"}/>
       <Text style={{color:'red',fontSize:20}}>{erreur}</Text>

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
       text:{
        fontSize: 30,
        fontWeight: "bold",
        marginVertical:20,
       },
       container1: {
       marginVertical:10,
       gap:20
      },
      checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        width:width*0.8,
        marginVertical:10,
      },
      button:{
        backgroundColor:'#4CC9FE',
        width: width * 0.8,
        borderRadius:20,
        borderWidth: 1,
        paddingVertical:12,
      },
      eyeIcon: {
        position: 'absolute',
        right: 20, 
      },
   
});