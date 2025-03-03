import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 

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
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")}/>
      <Image source={require("../assets/page3.png")} style={styles.textLogo }/>
      <Text style={styles.Text}>Explore Our Features</Text>
      <Text style={styles.p} numberOfLines={4}>
      Access a wide range of educational videos, interact with the community through forums, 
      and enjoy live streaming with real-time discussions. Content creators can easily manage
       their videos and streams.
      </Text>

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
  Text: {
    color: "#4CC9FE",
    fontSize: 30,
    fontWeight: "bold",
  },
  p: {
    marginVertical: 20,
    marginHorizontal: 25,
  },
  circlesContainer: {
    flexDirection: "row", // Alignement des cercles horizontalement
    marginTop: 20,
    gap: 10, // Espacement entre les cercles
    position: 'absolute', 
    top: 580,
     left: 120,
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
