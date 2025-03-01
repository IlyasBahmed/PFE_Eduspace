import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 

export default function Page4() {
  const navigation = useNavigation();
  const [activeCircle, setActiveCircle] = useState(2); 
  const circles = [0, 1, 2, 3]; 

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
    <View style={styles.container}>
      <Image source={require("../assets/page4.png")} />
      <Text style={styles.Text} numberOfLines={3}>Learn with a Collaborative Community</Text>
      <Text style={styles.p} numberOfLines={4}>
        Join our forums to share your knowledge or learn from others. At
        EduSpace, learning is a shared, enjoyable experience!
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
  },
  Text: {
    color: "#4CC9FE",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  p: {
    marginVertical: 20,
    marginHorizontal: 25,
  },
  circlesContainer: {
    flexDirection: "row", 
    marginTop: 20,
    gap: 10, 
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
