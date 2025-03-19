import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Dimensions,Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "./ReusableComponents/Button";
import Input from "./ReusableComponents/Input";
import axios from "axios";

const { width } = Dimensions.get("window");

export default function Login2() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setError("Veuillez remplir l'email");
    
    } else if (!emailRegex.test(email)) {
      setError("Veuiillez ecrire la format d'email");
    } else {
      try {
        const response = await axios.post("http://localhost:6005/login", {
          email:email,
          password: passw 
        });

        if (response.status === 200) {
          navigation.replace("Login");
        } else {
          setError("les identifiants sont incorrects");
        }
      } catch (err) {
        setError("Erreur lors de la connexion au serveur");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <Text style={styles.Text}>Log in to Your Account</Text>

      <View style={styles.container1}>
        <Input
          icon={"google"}
          color={"black"}
          placehorder={"Write your EMAIL"}
          onChange={(text) => setEmail(text)}
        />
        <View style={styles.div}>
          <Icon name="eye" size={24} color="black" />
            <TextInput
            onChangeText={(text) => setPassw(text)}
            secureTextEntry={showPassword}
            placeholder="Write your password"
            style={styles.input}
          />

          <Icon
            name={showPassword ? "eye" : "eye-slash"}
            size={24}
            color="black"
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>

        <View style={styles.div2}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
          >
            <Icon
              name={isChecked ? "check-square" : "square-o"}
              size={24}
              color="black"
            />
            <Text>Remember Me</Text>
          </TouchableOpacity>
        </View>

        <Button text="Login" onPress={handleLogin} />
        <View>
          <Text style={{ color: "red", fontSize: 15 }}>{error}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
        <Text>Forget Your password?</Text>
        <TouchableOpacity>
          <Text
            style={{ color: "#4CC9FE" }}
            onPress={() => navigation.navigate("TroublePassw")}
          >
            Click here
          </Text>
        </TouchableOpacity>
      </View>
      <Text>OR CONTINUE WITH</Text>
      <View style={{ flexDirection: "row", gap: 20, marginVertical: 10 }}>
        <TouchableOpacity>
          <Icon name="google" size={50} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="apple" size={50} color="#1877F2 " />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="linkedin" size={50} color="#0077B5" />
        </TouchableOpacity>
      </View>
      <Text>You do not have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Createaccount")}>
        <Text style={{ color: "#0077B5" }}>Create an account</Text>
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
  logo: {
    marginVertical: 20,
  },
  container1: {
    gap: 15,
    marginVertical: 20,
    width: width * 0.8,
    backgroundColor: "#FFFFFF",
  },
  div: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap: 20,
    borderRadius: 20,
    borderWidth: 1,
    width: width * 0.8,
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
  eyeIcon: {
    position: "absolute",
    right: 20,
  },

});
