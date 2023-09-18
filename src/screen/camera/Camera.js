import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { useCamera } from 'react-native-camera-hooks'
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs'
import { useNavigation } from '@react-navigation/native';
import { Button, TouchableRipple } from 'react-native-paper';
import { MaterialCommunityIcons, } from 'react-native-vector-icons'
import { screenHeight, screenWidth } from '../../config/Dimension';

const Camera = () => {

    const navigation = useNavigation();

    const [{ cameraRef }, { takePicture }] = useCamera();
    const [cameraPosition, setCameraPosition] = useState(false);
    const [showImage, setShowImage] = useState(false)

    const handleCapture = async () => {
        try {
            const data = await takePicture()
            const filePath = data?.uri
            const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('image Moved', filePath, 'to', newFilePath);
                    setShowImage(tre)
                })
                .catch((error) => {
                    console.log('file move Error', error);
                })
        } catch (error) {
            console.log('capture Error', error);
        }

    }
    return (
        <>
            <StatusBar hidden />
            {showImage ?
                <View>

                </View>
                :
                <RNCamera
                    ref={cameraRef}
                    type={cameraPosition ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                    style={styles.preview}
                >
                    <View style={styles.capture}>
                        <TouchableRipple
                            style={[StyleSheet.absoluteFill, { zIndex: 999, borderRadius: 50 }]}
                            onPress={handleCapture}
                            centered
                            borderless
                        >
                            <View />
                        </TouchableRipple>
                        <MaterialCommunityIcons name='checkbox-blank-circle' size={80} color={'#fff'} />

                    </View>
                    <View style={styles.rotateCamera}>
                        <TouchableRipple
                            style={[StyleSheet.absoluteFill, { zIndex: 999, }]}
                            onPress={() => setCameraPosition(!cameraPosition)}
                        >
                            <View />
                        </TouchableRipple>
                        <MaterialCommunityIcons name='camera-flip' size={70} color='#fff' />
                    </View>
                    <View style={styles.backButton}>
                        <TouchableRipple
                            style={[StyleSheet.absoluteFill, { zIndex: 999 }]}
                            onPress={() => navigation.goBack()}
                        >
                            <View />
                        </TouchableRipple>
                        <MaterialCommunityIcons name='keyboard-backspace' size={40} color='#fff' />
                    </View>
                </RNCamera>}
        </>
    )
}

export default Camera

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    capture: {
        position: 'absolute',
        overflow: 'hidden',
        bottom: screenHeight * 0.05,
        alignSelf: 'center'
    },
    rotateCamera: {
        position: 'absolute',
        bottom: screenHeight * 0.06,
        right: screenWidth * 0.05
    },
    backButton: {
        position: 'absolute',
        top: screenHeight * 0.05,
        left: screenWidth * 0.05
    }
})