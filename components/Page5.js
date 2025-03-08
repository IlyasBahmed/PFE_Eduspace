import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import { useFonts, Poppins_400Regular, Poppins_700Bold , Poppins_300Light} from "@expo-google-fonts/poppins";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export default function Page5() {
  const navigation = useNavigation();
  const [activeCircle, setActiveCircle] = useState(3); 
  const circles = [0, 1, 2, 3]; 
  navigation.setOptions({ headerShown: false });
  const handleCirclePress = (index) => {
    setActiveCircle(index); 
    switch (index) {
      case 0:
        navigation.replace("Page2");
        break;
      case 1:
        navigation.replace("Page3");
        break;
      case 2:
        navigation.replace("Page4");
        break;
      default:
        navigation.replace("Page5");
    }
  };

  return (
    <View style={styles.container}>
            <Image source={require("../assets/logo.png")} />
      <Image source={require("../assets/page2.png")} style={styles.textLogo }/>
      <Text style={styles.Text}>Start Your Learning Adventure Today</Text>
      <Text style={styles.p} numberOfLines={4}>
        Create a free account to access all educational content, join
        interactive communities, and enjoy live streaming. Begin your EduSpace
        journey now!
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.circlesContainer}>
        {circles.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[item === activeCircle ? styles.circleColore : styles.circle]} 
            onPress={() => handleCirclePress(item)} 
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop:60,
  },
  textLogo: {
    width: 340,
    height: 230,
   marginTop:0,
    paddingTop:0,
    resizeMode: 'contain',
  },
  Text: {
    color: "#4CC9FE",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  p: {
        marginVertical: 10,
        marginHorizontal: 25,
        textAlign: "justify",
        fontSize:20,
        fontFamily: "PoppinsLight",
        width :scale(300),
      },
  button: {
    backgroundColor: "#4CC9FE",
    width: 200,
    height: 40,
    borderRadius: 25,
    position:"absolute",
    top:verticalScale(570),
    left:scale(90),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
});
