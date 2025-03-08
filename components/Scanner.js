import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'; // Import du hook useNavigation
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from "react-native-vector-icons/FontAwesome";
import { RNCamera } from 'react-native-camera';
const QRCodeScanner = () => {
    const [qrData, setQrData] = useState(null);
  
    const handleBarCodeRead = ({ data }) => {
      setQrData(data);
      alert(`QR Code Scanned: ${data}`);
    };
  return (
    <View style={styles.container}>
        <Icon name='arrow-circle-right' >  </Icon>

      <Text style={styles.titre} >Scaner your <span style={styles.mot}>QR Code</span> </Text>
      <Text style={styles.txt2}>How you can use?</Text>
      <Text style={styles.txt}>1*. Go to your profile <br/>2*. Go to Stetting <br/> 3*. Go to my QR<br/>4*. Scan that QR code here. </Text>
      
    </View>
  )
}

export default Scanner
const styles=StyleSheet.create({
    container:{
    backgroundColor:"white",
    },
    titre:{
     fontFamily:"Poppins_700Bold",
     fontWeight:"bold",
     fontSize:32,
     
     textAlign:"center",

    },
    mot:{
        color:"green",
    },
    txt2:{
      fontWeight:"bold",
     fontSize:20,
     fontFamily:"Poppins_600SemiBold",
     textAlign:"center",
    },
    txt:{
        textAlign:"center",
        fontSize:20,
        fontFamily:"Poppins_400Regular",
        
    }
});