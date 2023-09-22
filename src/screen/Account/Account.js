import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Root from '../../components/Root'
import { memo } from 'react'

const Account = () => {
    return (
        <Root>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon='back' title='Account' />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Account</Text>
                </View>
            </SafeAreaView>
        </Root>
    )
}

export default Account

const styles = StyleSheet.create({})