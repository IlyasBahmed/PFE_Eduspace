import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Acceuil from './components/Acceuil';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Acceuil">
        <Stack.Screen name="Acceuil" component={Acceuil} options={{title:""}}/>
        <Stack.Screen name="Page2" component={Page2} options={{title:""}}/>
        <Stack.Screen name="Page3" component={Page3}options={{title:""}} />
        <Stack.Screen name="Page4" component={Page4} options={{title:""}}/>
        <Stack.Screen name="Page5" component={Page5} options={{title:""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

