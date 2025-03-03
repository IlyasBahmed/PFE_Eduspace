import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Utilisation de navigation

export default function Page2() {
  const navigation = useNavigation(); // Utilisation de navigation
  const circles = [0, 1, 2, 3]; // Tableau des cercles
  const [activeCircle, setActiveCircle] = useState(0); // Suivi du cercle actif
  navigation.setOptions({ headerShown: false }); 
  const handleCirclePress = (index) => {
    setActiveCircle(index); // Met à jour l'état du cercle actif
    // Logique de redirection en fonction du cercle cliqué
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
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <Image source={require("../assets/page2.png")} />
      <Text style={styles.Text}>Welcome to EduSpace!</Text>
      <Text style={styles.p} numberOfLines={4}>
        Step into a world of knowledge! Our app gives you access to a wide range of educational videos to help you expand your skills
      </Text>

      {/* Circles for pagination */}
      <View style={styles.circlesContainer}>
        {circles.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[item === activeCircle ? styles.circleColore : styles.circle]} // Change de style selon l'index
            onPress={() => handleCirclePress(item)} // Appel de la fonction de navigation
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
  },
  p: {
    marginVertical: 20,
    marginHorizontal: 25,
  },
  circlesContainer: {
    flexDirection: "row", // Alignement des cercles horizontalement
    marginTop: 20,
    gap: 10, // Espacement entre les cercles
  },
  circle: {
    width: 20, // Taille du cercle
    height: 20, // Taille du cercle
    borderRadius: 15, // Rendre le cercle rond
    backgroundColor: "#ccc", // Cercle gris par défaut (inactif)
    marginHorizontal: 5,
  },
  circleColore: {
    width: 20, // Taille du cercle coloré
    height: 20, // Taille du cercle coloré
    borderRadius: 15, // Rendre le cercle rond
    backgroundColor: "#4CC9FE", // Cercle bleu pour le cercle actif
    marginHorizontal: 5,

    
  },
});
