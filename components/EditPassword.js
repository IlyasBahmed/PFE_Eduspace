import React, { useState,useEffect } from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity,Dimensions} from "react-native";
import { useNavigation,useRoute} from "@react-navigation/native"; 
import Button from "./ReusableComponents/Button"; 
import Input from "./ReusableComponents/Input";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios"; 

export default function EditPassword() {
  const navigation = useNavigation();

    const [passw,setPassw]=useState("");
    const [passw1,setPassw1]=useState("");
    const [passw2,setPassw2]=useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [error,setError]=useState("");

    const route = useRoute();
    const { email } = route.params;

      const handleEdit=async()=>{
        if (passw.trim() === "") {
          setError("enter the old password");
      } else if (passw1.trim() === "") {
          setError("enter the new password");
      }else if(passw1.length<8){
      setError("the password must be at least 8 characters long");
      } else if(passw1===passw){
       setError("you cannot use your old password");  
      }else if (passw2.trim() === "" ) {
          setError("confirm the new password");      
      }else if(passw2!==passw1){ 
         setError("Veuillez confirmer par le meme password")
      } else {
          setError("");
          try {

            const response = await axios.put('http://localhost:6005/editpassword', {
                email: email,
                password: passw1, 
                oldPassword: passw,  
              });
            

            if (response.status === 200) {
              navigation.navigate("Login2");
            } else {
                setError("Erreur lors de la modification du password");
            }
        } catch (err) {
            setError("Erreur lors de la connexion au serveur");
        }
    }
};
      
    
    
  return (
      <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Edit Password</Text>
      <View style={styles.container1}>
      <Input icon={"lock"} color="black" placehorder={"enter the old password"} onChange={(passw)=>(setPassw(passw))}/>
      <Input icon={"lock"} color="black" placehorder={"Type your own password"} onChange={(passw)=>(setPassw1(passw))}/>
      <Text style={{ fontSize: 12}}>*The password must be at least 8 characters long.</Text>
      <Text style={{ fontSize: 12 }}>*You cannot use your old password..</Text>
      <Input icon={"lock"} color="black" placehorder={"Confirm your own password"} onChange={(passw)=>(setPassw2(passw))}/>
      </View>
      <TouchableOpacity style={styles.div} onPress={()=>{setIsChecked(!isChecked)}} >
         <Icon name={isChecked ? "check-square" : "square-o"} size={24} color="black" />
         <Text>I acknowledge that I have read, understood, and agree to the terms and conditions.</Text>
      </TouchableOpacity>
      <Text style={{color:'red',fontSize:20}}>{error}</Text>
       <Button text={"Edit Password"} onPress={handleEdit}/>
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
  container1: {
    marginVertical: 10,
    gap: 20
},
   text: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
},
  div: {
     flexDirection:'row',
     gap:10,
     marginHorizontal:30
},
});
