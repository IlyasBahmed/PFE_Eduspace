import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'nativewind'
import { Button } from 'react-native-web'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Loginscan = () => {
  return (
    <View>
      <Text style={styles.qrqndTitre}>Scaner Your<span>QR Code</span> QR Code</Text>
      <Text style={styles.titre} >How you can use?</Text>
      <Icon name="qrcode" size={30} color="black" />
      <Text>1*. Go to your profile</Text>
      <Text>2*. Go to Stetting</Text>
      <Text>3*. Go to my QR</Text>
      <Text>4*. Scan that QR code here.</Text>
      <Button style={styles.btn}>Scan QR Code</Button>
    </View>
  )
}
const styles=StyleSheet.create({



})
export default Loginscan