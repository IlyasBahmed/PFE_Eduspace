import React, { useState, useEffect } from "react";
import { 
    StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Platform 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Button from "./ReusableComponents/Button";
import Icon from "react-native-vector-icons/FontAwesome"; 
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useAuthRequest } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as Twitter from "expo-auth-session/providers/twitter";


// Google Sign-In Configuration
WebBrowser.maybeCompleteAuthSession();

const { width } = Dimensions.get("window");

export default function Login() {
    const navigation = useNavigation();
    const [request, response, promptAsync] = Google.useAuthRequest({
      clientId: "651586021894-shsjofidvudsvb9iam93l9rrq93nk0no.apps.googleusercontent.com",
      iosClientId: "651586021894-btjcpqt1krb219b54fp50vdhkk0dne4c.apps.googleusercontent.com",
      androidClientId: "651586021894-u6ucp66kjsh4gjeosv38slqnimk0q0d4.apps.googleusercontent.com",
    });
    const [requestfc, responsefc, promptAsyncfc] = Facebook.useAuthRequest({
      clientId: "9820383441328048",
    });
    const [requesttwit, responsetwit, promptAsynctw] = Twitter.useAuthRequest({
      clientId: "bz1yJw3zyb4IpNZMXdrjH1yop",
      redirectUri: "https://auth.expo.io/@PFE_EDUSPACE/your-app-slug",
      scopes: ["tweet.read", "users.read"],
    });
    useEffect(() => {
      if (responsefc?.type === "success") {
        console.log("Facebook Login Success!", responsefc.authentication);
      }
    }, [responsefc]);
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    useEffect(() => {
      if (response?.type === "success") {
        console.log("Google Login Success!", response.authentication);
      }
    }, [response]);
    
    

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
            <View style={styles.container1}>
                <TouchableOpacity style={styles.Button} onPress={() => promptAsync()}>
                    <Icon name="google" size={24} color="#DB4437" />
                    <Text style={styles.Text2}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => promptAsyncfc()}>
                <Icon name="facebook" size={24} color="#1877F2" />
                    <Text style={styles.Text2}>Sign in with Facebook</Text>
                 </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Scanner")}>
                    <Icon name="qrcode" size={24} color="#1877F2" />
                    <Text style={styles.Text2}>Sign in with QR CODE</Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>or</Text>
                <Button text="Sign in with Email" onPress={() => navigation.navigate("Login2")} />
                <Text style={styles.Text2}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Createaccount")}>
                    <Text style={{ color: '#4CC9FE' }}>Create a new account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
    },
    container1: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
    },
    Text2: {
        fontWeight: "bold",
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
        fontWeight: 'bold',
    }
});
