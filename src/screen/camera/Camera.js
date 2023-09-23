import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
// import { useCamera } from 'react-native-camera-hooks'
// import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs'
import { useNavigation } from '@react-navigation/native';
// import { Button, TouchableRipple } from 'react-native-paper';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons'
import { screenHeight, screenWidth } from '../../config/Dimension';
// import Root from '../../components/CustomComponent/Root';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import axios from 'axios';
import { useRef } from 'react';
import { Button } from 'react-native-paper';

const OpenCamera = () => {

    const navigation = useNavigation();

    // const [{ cameraRef }, { takePicture }] = useCamera();
    const cameraRef = useRef(null)
    const [cameraPosition, setCameraPosition] = useState(false);
    const [openCamera, setOpenCamera] = useState(false);
    const [clickPhoto, setClickedPhoto] = useState('')
    // const [showImage, setShowImage] = useState(false)
    // const devices = useCameraDevices();
    // const device = devices.back;

    // const handleCapture = async () => {
    //     try {
    //         const data = await takePicture()
    //         const filePath = data?.uri
    //         const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
    //         RNFS.moveFile(filePath, newFilePath)
    //             .then(() => {
    //                 console.log('image Moved', filePath, 'to', newFilePath);
    //                 // setShowImage(true)
    //             })
    //             .catch((error) => {
    //                 console.log('file move Error', error);
    //             })
    //     } catch (error) {
    //         console.log('capture Error', error);
    //     }

    // }
    // useEffect(() => {
    //     requestPermission()
    // }, [])

    // const requestPermission = async () => {
    //     const newCameraPermission = await Camera.requestCameraPermission()
    //     const newMicrophonePermission = await Camera.requestMicrophonePermission()
    //     console.log('newCameraPermission', newCameraPermission);
    // }


    const testApi = (path) => {
        const pa = 'file://' + path
        let form_data = new FormData()
        form_data.append("myName", "Antony Donald")
        form_data.append("Image", pa)
        axios({
            method: 'POST',
            url: "http://192.168.1.6:8000/company/create-profile/",
            // headers : {
            //     "Access-Control-Allow-Credentials": true,
            //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            //     "Content-Type": "application/json"
            // },
            headers: {
                'content-type': 'multipart/form-data'
            },
            data: form_data
        })
            .then(res => {
                console.log("RES ==== ", res);
            })
            .catch(err => console.log("ERRR === ", err))
    }

    const devices = useCameraDevices();
    const device = cameraPosition ? devices.back : devices?.front;
    useEffect(() => {
        requestPermission()
    }, [])

    const takePicture = async () => {
        const photo = await cameraRef?.current?.takePhoto()
        setClickedPhoto(photo?.path)
        setOpenCamera(false)
        testApi(photo?.path)
    }

    const requestPermission = async () => {
        const newCameraPermission = await Camera.requestCameraPermission()
        const newMicrophonePermission = await Camera.requestMicrophonePermission()
        console.log('newCameraPermission', newCameraPermission);
    }
    if (device == null) return <></>
    return (
        <>
            {openCamera ? < View style={{ flex: 1 }}>
                <StatusBar hidden />
                <Camera
                    ref={cameraRef}
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    photo={true}
                />
                <View style={styles.capture}>
                    <TouchableOpacity onPress={takePicture}>
                        <Text style={styles?.Text1}>Tab to capture</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.backButton}>
                    <TouchableOpacity onPress={() => navigation?.goBack()}>
                        <MaterialCommunityIcons name='keyboard-backspace' size={40} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles?.Text}>Attendence</Text>
                </View>
                <View style={styles?.rotateCamera}>
                    <TouchableOpacity onPress={() => setCameraPosition(!cameraPosition)}>
                        <MaterialCommunityIcons name={'rotate-3d-variant'} size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles?.faceBox}>
                    <Ionicons name={'scan-outline'} size={300} color={'#fff'} />
                </View>


            </View > :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    {clickPhoto !== "" && (
                        <Image source={{ uri: 'file://' + clickPhoto }} style={{ width: '90%', height: 200 }} />
                    )}
                    <Button onPress={() => setOpenCamera(true)}>take photo</Button>
                </View>
            }
        </>
    );

}

export default OpenCamera

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    capture: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ebb20e',
        width: screenWidth,
        padding: 20
    },
    rotateCamera: {
        position: 'absolute',
        bottom: 15,
        right: 20,
        zIndex: 1
    },
    backButton: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#091A7A',
        width: screenWidth,
        flexDirection: 'row',
        padding: 10,
    },
    Text: {
        color: '#fff',
        fontSize: 25,
        textAlignVertical: 'center',
        paddingLeft: 25,
    },
    Text1: {
        textAlign: 'center',
        fontSize: 20,
        width: '100%',
        fontWeight: '700',
        color: '#fff'
    },
    faceBox: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
})