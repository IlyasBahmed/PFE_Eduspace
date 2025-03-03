import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false }); // Cacher la barre de navigationx
    setTimeout(() => {
      navigation.replace('Page2');
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icone.png')} style={styles.logo} />
      <Image source={require('../assets/logo.png')} style={styles.textLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  textLogo: {
    width: 300,
    height: 100,
  },
});
