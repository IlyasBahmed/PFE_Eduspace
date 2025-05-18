import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'; 
import Icon from "react-native-vector-icons/FontAwesome";
import Navbar from './ComponentsReutilisable/NavBar';  
import { useNavigation } from '@react-navigation/native';
import Footer from './ComponentsReutilisable/Footer';

const IncomePage = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(""); // Gérer l'erreur
  const navigation = useNavigation();

  const handlePayPalPress = () => {
    console.log("PayPal selected");
  };

  const handleStripePress = () => {
    console.log("Stripe selected");
  };

  const handleSubmit = () => {
    if (checked) {
      navigation.replace("WithdrawPage");  
    } else {
      setError("Please accept the terms and conditions.");
    }
  };

  return (
    <View style={styles.container}>
              <Navbar avatarUrl={require('../../assets/fondecran.jpg')} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image source={require('../../assets/income.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome To Page Income</Text>
        </View>

        <Text style={styles.subtitle}>You must choose a withdrawal method</Text>

        {/* Payment Methods */}
        <View style={styles.paymentMethods}>
          <TouchableOpacity style={styles.payPalButton} onPress={handlePayPalPress}>
          <Icon name="paypal" size={30} color="white" />
            <Text style={styles.paymentText}>PayPal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.stripeButton} onPress={handleStripePress}>
          <Icon name="credit-card" size={30} color="#fff" />
          <Text style={styles.paymentText}>Stripe</Text>
          </TouchableOpacity>
        </View>

        {/* Terms & Conditions */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>• Legal activities (no fraud, spam, or prohibited content)</Text>
          <Text style={styles.termsText}>• Minimum withdrawal threshold (e.g., $10)</Text>
          <Text style={styles.termsText}>• Secure payment (PayPal, bank transfer)</Text>
          <Text style={styles.termsText}>• Inappropriate content = ban/account deletion</Text>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkbox} onPress={() => setChecked(!checked)}>
              <Icon name={checked ? "check-square" : "square-o"} size={24} color="black" />
              <Text style={styles.checkboxText}>I agree to these terms</Text>
            </TouchableOpacity>
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Ionicons name="arrow-forward" size={30} color="white" />
        </TouchableOpacity>

      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingTop: 20,
    paddingBottom: 30, 
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
 
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  paymentMethods: {
    padding: 20,
  },
  payPalButton: {
    backgroundColor: '#0061F2', 
    flexDirection: 'row',
    justifyContent: 'center',
    gap:10,
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  stripeButton: {
    backgroundColor: '#0061F2',  
    flexDirection: 'row',
    justifyContent: 'center',
    gap:10,
    padding: 15,
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  checkbox:{
    flexDirection:'row',
    alignItems:'center'
  },
  paymentText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  termsText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 30, 
    alignItems: 'center',
    width: 50,
    justifyContent: 'center', 
    alignSelf: 'flex-end', 
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default IncomePage;
