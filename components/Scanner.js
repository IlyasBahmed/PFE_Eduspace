import { View, Text, Alert, Button, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

const Scanner = () => {
    const [scanned, setScanned] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        (async () => {
            const { status } = await requestPermission();
            if (status !== 'granted') {
                alert("Permission to access camera is required!");
            }
        })();
    }, [requestPermission]);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Alert.alert(
            `Código ${type} Scaneado`,
            `Dados: ${data}`,
            [
                {
                    text: 'OK',
                    onPress: () => setScanned(false),
                }
            ],
            { cancelable: false }
        );
    };

    if (!permission?.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    return (
        
        <CameraView 
            style={styles.camera} 
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        >
            <View style={styles.overlay}>
                <View style={styles.layerTop} />
                <View style={styles.layerCenter}>
                    <View style={styles.layerLeft} />
                    <View style={styles.focused} />
                    <View style={styles.layerRight} />
                </View>
                <View style={styles.layerBottom} />
            </View>
        </CameraView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        marginBottom: 20,
    },
    camera: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    layerTop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
    },
    layerCenter: {
        flexDirection: 'row',
        flex: 1,
    },
    layerLeft: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    focused: {
        flex: 5,
        borderColor: 'white',
        borderWidth: 2,
    },
    layerRight: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    layerBottom: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
    },
});

export default Scanner;