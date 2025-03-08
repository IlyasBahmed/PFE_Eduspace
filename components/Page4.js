import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'; 
<<<<<<< HEAD
import { useFonts, Poppins_400Regular, Poppins_700Bold , Poppins_300Light} from "@expo-google-fonts/poppins";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
=======
import Child from './ReusableComponents/Child';

>>>>>>> 010c837 (Nouvelle modifications)
export default function Page4() {
  const navigation = useNavigation();
  const [activeCircle, setActiveCircle] = useState(2); 
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
      case 3:
        navigation.replace("Page5");
        break;
      default:
        navigation.replace("Page4");
    }
  };

  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <Image source={require("../assets/page4.png")} style={styles.textLogo }/>
      <Text style={styles.Text} numberOfLines={2}>Learn with Collaboration</Text>
      <Text style={styles.p}numberOfLines={4} >
        Join our forums to share your knowledgeor learn from others.
      At EduSpace,learning is a shared,enjoyable experience!
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
    paddingTop: verticalScale(40),
  },
  textLogo: {
    width: 350,
    height: 300,
   marginTop:0,
    paddingTop:0,
    resizeMode: 'contain',
  },
  Text: {
    color: "#4CC9FE",
    fontSize: 30,
    fontWeight: "bold",
    alignItems:"center",
    fontFamily: "PoppinsBold",
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
});
=======
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
>>>>>>> 010c837 (Nouvelle modifications)
