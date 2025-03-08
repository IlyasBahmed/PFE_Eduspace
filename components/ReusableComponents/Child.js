import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Child({ logo, image, titre, text, circles, activeCircle, onCirclePress }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Image source={image} style={styles.mainImage} />
      <Text style={styles.Text}>{titre}</Text>
      <Text style={styles.p} numberOfLines={4}>
        {text}
      </Text>

      <View style={styles.circlesContainer}>
        {circles.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[item === activeCircle ? styles.circleColore : styles.circle]}
            onPress={() => onCirclePress(item)}
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
    paddingTop: 60,
  },

  mainImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
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
    textAlign: "center",
  },
  circlesContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
    position: "absolute",
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
});
