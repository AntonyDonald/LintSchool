import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Navigator from '../routes/Navigator'
import SnackBar from '../common/SnackBar'
// import DeviceInfo from 'react-native-device-info'

const MainApp = () => {

   

    return (
        <>
            <Navigator />
            <SnackBar />
        </>
    )
}

export default MainApp

const styles = StyleSheet.create({})