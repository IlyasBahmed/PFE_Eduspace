import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useLiveStore from '../Zustand/store'; 
import { useNavigation } from '@react-navigation/native';

export default function LiveList() {
  const navigation = useNavigation();
  const lives = useLiveStore(state => state.lives);
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [currentLive, setCurrentLive] = useState(null);

  const handlePasswordSubmit = () => {
    if (!currentLive) {
      Alert.alert("Erreur", "Session non trouvée");
      setModalVisible(false);
      return;
    }
    
    if (password === currentLive.password) {
      setModalVisible(false);
      navigation.navigate('LiveScreen', { liveId: currentLive.id, liveName: currentLive.name });
      setPassword('');
      setCurrentLive(null);
    } else {
      Alert.alert("Erreur", "Mot de passe incorrect");
    }
  };

  const handleLiveItemClick = (live) => {
    if (live.isPrivate) {
      setCurrentLive(live);
      setModalVisible(true);
    } else {
      navigation.navigate('LiveScreen', { liveId: live.id, liveName: live.name });
    }
  };

  return (
    <View style={styles.container}>
      {lives.length > 0 ? (
        lives.map((live) => (
          <TouchableOpacity 
            key={live.id} 
            onPress={() => handleLiveItemClick(live)} 
            style={styles.liveItem}
            activeOpacity={0.7}
          >
            <Text style={styles.liveName}>{live.name}</Text>
            <Text style={styles.liveDate}>{live.date}</Text>
            <View style={styles.statusContainer}>
              <Text style={styles.liveStatus}>{live.status}</Text>
              <Text style={styles.Text}>{live.isPrivate ? 'Privé' : 'Public'}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noLiveText}>Aucun événement live disponible</Text>
      )}

      <Modal 
        animationType="slide" 
        transparent={true} 
        visible={modalVisible} 
        onRequestClose={() => {
          setModalVisible(false);
          setPassword('');
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Entrez le mot de passe</Text>
            <TextInput 
              style={styles.passwordInput} 
              value={password} 
              onChangeText={setPassword} 
              placeholder="Entrez le mot de passe" 
              secureTextEntry={true} 
            />
            <View style={styles.modalButtons}>
              <Pressable 
                style={[styles.button, styles.cancelButton]} 
                onPress={() => {
                  setModalVisible(false);
                  setPassword('');
                  setCurrentLive(null);
                }}
              >
                <Text style={styles.buttonText}>Annuler</Text>
              </Pressable>

              <Pressable 
                style={[styles.button, styles.submitButton]} 
                onPress={handlePasswordSubmit}
              >
                <Text style={styles.buttonText}>Valider</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 70, // Pour laisser de l'espace pour le footer
  },
  liveItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  Text: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'yellow',
    fontWeight: 'bold',
  },
  liveName: {
    fontSize: 18,
    fontWeight: '600',
  },
  liveDate: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liveStatus: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  noLiveText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#777',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  passwordInput: {
    width: '100%',
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 8,
    padding: 12,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#f1f1f1',
  },
  submitButton: {
    backgroundColor: '#4A90E2',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
