import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { statusbarHeight } from '../../config/Dimension'

export default function Root({ children }) {
    return (
        <SafeAreaView style={[styles.container]}>
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})