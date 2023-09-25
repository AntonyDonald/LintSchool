import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Navigator from '../routes/Navigator'
import LocationPermission from '../components/permissions/LocationPermission'
// import DeviceInfo from 'react-native-device-info'

const MainApp = () => {

    useEffect(() => {
        requestCameraPermission()
    })


    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: ' App Camera Permission',
                    message:
                        ' App needs access to your camera ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    return (
        <>
            <Navigator />
        </>
    )
}

export default MainApp

const styles = StyleSheet.create({})