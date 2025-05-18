import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import Webcam from 'react-webcam';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LiveScreen({ route, navigation }) {
  const { liveName } = route.params;
  const isWeb = Platform.OS === 'web';
  const webcamRef = useRef(null);
  const cameraRef = useRef(null);
  const insets = useSafeAreaInsets();

  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isCameraMuted, setIsCameraMuted] = useState(false);
  const [permissions, setPermissions] = useState({
    camera: isWeb ? 'granted' : null,
    audio: isWeb ? 'granted' : null
  });
  const [cameraStatus, setCameraStatus] = useState('initializing');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isWeb) {
      console.log('Web platform detected');
      initializeWebCamera();
    } else {
      initializeMobileCamera();
    }
  }, []);

  const initializeWebCamera = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Votre navigateur ne supporte pas l\'accès à la caméra');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user"
        },
        audio: true
      });

      console.log('Camera access granted');
      setCameraStatus('ready');
      stream.getTracks().forEach(track => track.stop());
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError(err.message);
      setCameraStatus('error');
    }
  };

  const initializeMobileCamera = async () => {
    try {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      const { status: audioStatus } = await Camera.requestMicrophonePermissionsAsync();
      
      setPermissions({
        camera: cameraStatus,
        audio: audioStatus
      });

      if (cameraStatus === 'granted' && audioStatus === 'granted') {
        setCameraStatus('ready');
      } else {
        setCameraStatus('error');
        setError('Permissions non accordées');
      }
    } catch (err) {
      console.error('Error initializing mobile camera:', err);
      setError(err.message);
      setCameraStatus('error');
    }
  };

  const renderCamera = () => {
    if (isCameraMuted) {
      return (
        <View style={styles.cameraOffContainer}>
          <Text style={styles.cameraOffText}>Caméra désactivée</Text>
        </View>
      );
    }

    if (cameraStatus === 'initializing') {
      return (
        <View style={styles.cameraOffContainer}>
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text style={styles.cameraOffText}>Initialisation de la caméra...</Text>
        </View>
      );
    }

    if (cameraStatus === 'error') {
      return (
        <View style={styles.cameraOffContainer}>
          <MaterialIcons name="error" size={50} color="red" />
          <Text style={styles.cameraOffText}>Erreur: {error || "Impossible d'accéder à la caméra"}</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => {
              setCameraStatus('initializing');
              setError(null);
              if (isWeb) {
                initializeWebCamera();
              } else {
                initializeMobileCamera();
              }
            }}
          >
            <Text style={styles.retryButtonText}>Réessayer</Text>
          </TouchableOpacity>
        </View>
      );
    }

    // --- WEB ---
    if (isWeb) {
      return (
        <Webcam
          ref={webcamRef}
          audio={!isMicMuted}
          videoConstraints={{
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: "user"
          }}
          style={styles.camera}
          mirrored={true}
          onUserMedia={() => setCameraStatus('ready')}
          onUserMediaError={(err) => {
            setError(err.message);
            setCameraStatus('error');
          }}
        />
      );
    }

    // --- MOBILE ---
    if (!Camera.Constants || cameraStatus !== 'ready') {
      return (
        <View style={styles.cameraOffContainer}>
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text style={styles.cameraOffText}>Chargement de la caméra...</Text>
        </View>
      );
    }

    return (
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          type={Camera.Constants.Type.front}
          useCamera2Api={true}
        >
          <View style={[styles.cameraOverlay, { paddingTop: insets.top }]}>
            <View style={styles.header}>
              <Text style={styles.title}>{liveName}</Text>
            </View>
          </View>
        </Camera>
      </View>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor="#9b59b6" />
      {renderCamera()}

      <View style={[styles.controls, { paddingBottom: insets.bottom }]}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={[styles.controlButton, styles.endCallButton]}
        >
          <MaterialIcons name="call-end" size={30} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => setIsMicMuted(!isMicMuted)} 
          style={styles.controlButton}
        >
          <MaterialIcons 
            name={isMicMuted ? "mic-off" : "mic"} 
            size={30} 
            color={isMicMuted ? "red" : "white"} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => setIsCameraMuted(!isCameraMuted)} 
          style={styles.controlButton}
        >
          <MaterialIcons 
            name={isCameraMuted ? "videocam-off" : "videocam"} 
            size={30} 
            color={isCameraMuted ? "red" : "white"} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6',
  },
  cameraContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  cameraOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  cameraOffContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  cameraOffText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    zIndex: 10,
    gap: 20,
  },
  controlButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
    borderRadius: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  endCallButton: {
    backgroundColor: 'red',
  },
  retryButton: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  retryButtonText: {
    color: '#9b59b6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

console.log('Camera.Constants:', Camera.Constants);