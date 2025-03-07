import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions ,Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

export default function Login2() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  return (
    <View style={styles.container}>
      <View>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      </View>
      
      <Text style={styles.Text}>Log in to Your Account</Text>

      <View style={styles.container1}>
        <View style={styles.div}>
          <Icon name="google" size={24} color="black" />
          <TextInput
            ref={emailInputRef} 
            placeholder="Write your email"
            style={styles.input}
          />
        </View>

        <View style={styles.div}>
          <Icon name="eye" size={24} color="#DB4437" />
          <TextInput
            ref={passwordInputRef}
            secureTextEntry={!showPassword}
            placeholder="Write your password"
            style={styles.input}
  
          />
          <Icon
            name={showPassword ? "eye" : "eye-slash"}
            size={24}
            color="black"
            style={{ marginLeft: 30 }}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>

        <View style={styles.div2}>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={{ flexDirection: "row", alignItems: "center",gap:20 }}>
            <Icon name={isChecked ? "check-square" : "square-o"} size={24} color="black" />
            <Text>Remember Me</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ textAlign: "center", color: "white" }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',gap:10,marginVertical:10}}>
      <Text>Forget Your password?</Text>
      <TouchableOpacity>
        <Text style={{color :'blue'}}>Click here</Text>
        </TouchableOpacity>
      </View>
      <Text>OR CONTINUE WITH</Text>
      <View style={{flexDirection:'row',gap:20,marginVertical:10}}>
      <TouchableOpacity >
      <Icon name="google" size={50} color="#DB4437" />
    </TouchableOpacity>
      <TouchableOpacity >
      <Icon name="apple" size={50} color="#1877F2 "/>
      </TouchableOpacity>
      <TouchableOpacity >
      <Icon name="linkedin" size={50} color="#0077B5" />
      </TouchableOpacity>
      </View>
      <Text>You do not have an account?</Text>
      <TouchableOpacity>
        <Text style={{color :'blue'}}>Create an account</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  logo:{
    marginVertical:20
  },
  container1: {
    gap: 15,
    marginVertical: 20,
    width: width * 0.8,
    backgroundColor: "#FFFFFF",
  },
  div: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
 
  div2: {
    flexDirection: "row",
    alignItems: "center",
  },
  Text: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#4CC9FE",
    width: width * 0.8,
    paddingVertical: 10,
    borderRadius: 10,
  },


});
