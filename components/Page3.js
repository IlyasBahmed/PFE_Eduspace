import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'; 
<<<<<<< HEAD
import { useFonts, Poppins_400Regular, Poppins_700Bold , Poppins_300Light} from "@expo-google-fonts/poppins";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
=======
import Child from './ReusableComponents/Child';

>>>>>>> 010c837 (Nouvelle modifications)
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
<<<<<<< HEAD

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF", 
    paddingTop: verticalScale(40),
  },
  Text: {
    color: "#4CC9FE",
    fontSize: 30,
    fontWeight: "bold",
    
  },
  p: {
      marginVertical: 10,
      marginHorizontal: 25,
      textAlign: "justify",
      fontSize:20,
      fontFamily: "PoppinsLight",
      width :scale(300),
    },
    circlesContainer: {
      flexDirection: "row",
      marginTop: verticalScale(20),
      gap: 10,
      position: 'absolute', 
      top: verticalScale(600),
      left: scale(110),
    },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  circleColore: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: "#4CC9FE",
    marginHorizontal: 5,
  },
  textLogo: {
    width: 500,
    height: 300,
   marginTop:0,
    paddingTop:0,
    resizeMode: 'contain',
  },
});
=======
>>>>>>> 010c837 (Nouvelle modifications)
