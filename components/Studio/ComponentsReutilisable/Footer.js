import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from 'react-native-vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();
  const route = useRoute();  // Utiliser useRoute pour obtenir la route active
  const [activeIcon, setActiveIcon] = useState(route.name);  // Définir l'icône active en fonction de la route actuelle


  return (
    <View style={styles.footer}>
      <Ionicons
        name="home"
        size={30}
        color={activeIcon === "Page1" ? "#4CC9FE" : "black"} 
        onPress={() => navigation.navigate('Page1')}
      />
      <Ionicons
        name="list"
        size={30}
        color={(activeIcon === "VideosListPage" || activeIcon === "VideoAnalyticsPage") ? "#4CC9FE" : "black"} // Vérifier si la route actuelle est "Page2"
        onPress={() => navigation.navigate('VideosListPage')}
      />
      <Ionicons
        name="stats-chart"
        size={30}
        color={activeIcon === "ChannelAnalytics" ? "#4CC9FE" : "black"} // Vérifier si la route actuelle est "Page3"
        onPress={() => navigation.navigate('ChannelAnalytics')}
      />
      <FontAwesome
        name="comment"
        size={30}
        color={activeIcon === "Comment" ? "#4CC9FE" : "black"} 
        onPress={() => navigation.navigate('Comment')}
      />
      <FontAwesome
        name="dollar"
        size={30}
        color={(activeIcon === "IncomePage" || activeIcon==="WithdrawPage") ? "#4CC9FE" : "black"} 
        onPress={() => navigation.navigate('IncomePage')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
