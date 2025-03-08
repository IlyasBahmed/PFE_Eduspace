import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import { useFonts, Poppins_400Regular, Poppins_700Bold , Poppins_300Light} from "@expo-google-fonts/poppins";
import Child from './ReusableComponents/Child';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export default function Page3() {
  const navigation = useNavigation();
  const [activeCircle, setActiveCircle] = useState(1); 
  const circles = [0, 1, 2, 3]; 
  navigation.setOptions({ headerShown: false });
  const handleCirclePress = (index) => {
    setActiveCircle(index); 
    switch (index) {
      case 0:
        navigation.replace("Page2");
        break;
      case 2:
        navigation.replace("Page4");
        break;
      case 3:
        navigation.replace("Page5");
        break;
      default:
        navigation.replace("Page3");
    }
  };

  return (
    <Child
    activeCircle={activeCircle}
    onCirclePress={handleCirclePress}
    logo={require("../assets/logo.png")}
    image={require("../assets/page3.png")}
    titre="Explore Our Features"
    text="Access a wide range of educational videos, interact with the community through forums, and enjoy live streaming with real-time discussions."
    circles={circles}
  />
);
}



