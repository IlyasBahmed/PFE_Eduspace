import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Utilisation de navigation
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Child from './ReusableComponents/Child';
import { useFonts, Poppins_400Regular, Poppins_700Bold , Poppins_300Light} from "@expo-google-fonts/poppins";
export default function Page2() {
  const navigation = useNavigation(); 
  
  const circles = [0, 1, 2, 3];
  const [activeCircle, setActiveCircle] = useState(0);
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []); 
    const handleCirclePress = (index) => {
    setActiveCircle(index); 
    switch (index) {
      case 1:
        navigation.replace("Page3");
        break;
      case 2:
        navigation.replace("Page4");
        break;
      case 3:
        navigation.replace("Page5");
        break;
      default:
        navigation.replace("Page2");
    }
  };

  return (
    <Child
    activeCircle={activeCircle}
    onCirclePress={handleCirclePress}
    logo={require("../assets/logo.png")}
    image={require("../assets/page2.png")}
    titre="Welcome to EduSpace!"
    text="Step into a world of knowledge! Our app gives you access to a wide range of educational videos to help you expand your skills"
    circles={circles}
  />
  );
}


