import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Root from '../../components/Root'
import Header from '../../components/Header'
import { memo } from 'react'

const Notification = () => {
    return (
        <Root>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon='back' title='Notification' />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Notification</Text>
                </View>
            </SafeAreaView>
        </Root>
    )
}

export default memo(Notification)

const styles = StyleSheet.create({})