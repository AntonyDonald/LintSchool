import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Root from '../../components/Root'
import Header from '../../components/Header'

const OTPVerification = () => {
  return (
    <Root>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon='back' title='Notification' />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>OTP</Text>
                </View>
            </SafeAreaView>
        </Root>
  )
}

export default OTPVerification

const styles = StyleSheet.create({})