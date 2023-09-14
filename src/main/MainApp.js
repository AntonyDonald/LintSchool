import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigator from '../routes/Navigator'
import SnackBar from '../common/SnackBar'

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