import React, { useState ,useEffect} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Child from './ReusableComponents/Child';
import { useNavigation } from '@react-navigation/native'; 
import { useFonts, Poppins_400Regular, Poppins_700Bold , Poppins_300Light} from "@expo-google-fonts/poppins";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export default function Page4() {
  const navigation = useNavigation();
  const [activeCircle, setActiveCircle] = useState(2); 
  const circles = [0, 1, 2, 3]; 
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);  
   const handleCirclePress = (index) => {
    setActiveCircle(index); 
    switch (index) {
      case 0:
        navigation.replace("Page2");
        break;
      case 1:
        navigation.replace("Page3");
        break;
      case 3:
        navigation.replace("Page5");
        break;
      default:
        navigation.replace("Page4");
    }
  };

  return (
    <Child
       activeCircle={activeCircle}
       onCirclePress={handleCirclePress}
       logo={require("../assets/logo.png")}
       image={require("../assets/page4.png")}
       titre="Learn with a Collaborative Community"
       text="Join our forums to share your knowledge or learn from others. At EduSpace, learning is a shared, enjoyable experience!"
       circles={circles}
     />
   );
 }