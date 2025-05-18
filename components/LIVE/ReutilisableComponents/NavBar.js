import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import useLiveStore from '../Zustand/store';  // Importation du store
import LiveList from './LiveList';
import Webcam from 'react-webcam';
const { width } = Dimensions.get("window");

export default function NavBar() {
  const addLive = useLiveStore((state) => state.addLive);  
  const lives = useLiveStore((state) => state.lives);
  const [modalVisible, setModalVisible] = useState(false);
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState(''); 
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredLives, setFilteredLives] = useState([]);

  useEffect(() => {
    setFilteredLives(lives);
  }, [lives]);

  const handleCreateEvent = () => {
    // if (eventName.trim()!='') {
    const newEvent = {
      name: eventName,
      date: date.toLocaleDateString(),
      isPrivate: isPrivate,
      password: isPrivate ? password : null,
    };
    addLive(newEvent); 
    setModalVisible(false);
    resetForm();
  // }else{
  //   alert('Veuillez remplir Le nom de l\'evenement');
  // }
}
  const resetForm = () => {
    setEventName('');
    setDate(new Date());
    setIsPrivate(false);
    setPassword(''); 
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
      const filtered = lives.filter((item) => 
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredLives(filtered);
    }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="add-circle-outline" size={28} color="#4A90E2" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => setSearch(true)}
          >
            <Ionicons name="search-outline" size={24} color="#333" />
          </TouchableOpacity>
  
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => console.log('Notifications pressed')}
          >
            <Ionicons name="notifications-outline" size={24} color="#333" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        <Modal 
          animationType="slide" 
          transparent={true} 
          visible={search}
          onRequestClose={() => {
            setSearch(false);
            setSearchText('');
            setFilteredLives(lives);
          }}
        >
          <View style={styles.searchModalContainer}>
            <View style={styles.searchModalContent}>
              <View style={styles.searchHeader}>
                <TouchableOpacity 
                  onPress={() => {
                    setSearch(false);
                    setSearchText('');
                    setFilteredLives(lives);
                  }}
                  style={styles.closeButton}
                >
                  <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.searchTitle}>Rechercher</Text>
              </View>
              
              <View style={styles.searchInputContainer}>
                <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Rechercher un live..."
                  value={searchText}
                  onChangeText={handleSearch}
                  autoFocus={true}
                />
              </View>

              <View style={styles.searchResults}>
                {filteredLives.map((live, index) => (
                  <TouchableOpacity 
                    key={index}
                    style={styles.searchResultItem}
                    onPress={() => {
                      setSearch(false);
                      setSearchText('');
                      setFilteredLives(lives);
                    }}
                  >
                    <Text style={styles.searchResultText}>{live.name}</Text>
                    <Text style={styles.searchResultDate}>{live.date}</Text>
                  </TouchableOpacity>
                ))}
                {filteredLives.length === 0 && searchText.length > 0 && (
                  <Text style={styles.noResultsText}>Aucun résultat trouvé</Text>
                )}
              </View>
            </View>
          </View>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            resetForm();
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Create New Live</Text>
              
              <TextInput
                style={styles.input}
                placeholder="Enter event name"
                value={eventName}
                onChangeText={setEventName}
              />
              
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkboxLabel}>Private event</Text>
                <TouchableOpacity onPress={() => setIsPrivate(!isPrivate)}>
                  <Ionicons 
                    name={isPrivate ? "checkbox" : "square-outline"} 
                    size={24} 
                    color="#4A90E2" 
                  />
                </TouchableOpacity>
              </View>
              
              {isPrivate && (
                <View>
                  <TextInput 
                    placeholder="Enter password" 
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword} 
                    secureTextEntry={true} 
                  />
                </View>
              )}
              
              <TouchableOpacity 
                style={styles.dateInput}
                onPress={() => setShowDatePicker(!showDatePicker)}
              >
                <Text>{date.toLocaleDateString()}</Text>
                <Ionicons name="calendar" size={20} color="#666" />
              </TouchableOpacity>
              
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onDateChange}
                />
              )}
              
              <Text style={styles.noteText}>
                {isPrivate 
                  ? "Check your email for the private access password" 
                  : "This event will be visible to everyone"}
              </Text>
              
              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.cancelButton]}
                  onPress={() => {
                    setModalVisible(false);
                    resetForm();
                  }}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                
                <Pressable
                  style={[styles.button, styles.submitButton]}
                  onPress={handleCreateEvent}
                >
                  <Text style={styles.buttonText}>Create</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal> 
      </View>

      <LiveList filteredLives={filteredLives} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#e1e1e1',
    width: width,
    marginVertical: 20,
  },
  container2:{
    flex:1,
    marginTop:150,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 10,
    position: 'relative',
  },
  addButton: {
    marginLeft: 15,
  },
  notificationBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
    paddingVertical: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  dateInput: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
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
  searchModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  searchModalContent: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  closeButton: {
    padding: 5,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
    color: '#333',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    height: '100%',
  },
  clearButton: {
    padding: 5,
  },
  searchResults: {
    marginTop: 10,
    maxHeight: 300,
  },
  searchResultItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchResultText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  searchResultDate: {
    fontSize: 14,
    color: '#666',
  },
  noResultsText: {
    textAlign: 'center',
    padding: 20,
    color: '#666',
  },
});