import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/headers/Header'
import { memo } from 'react'
import Root from '../../components/CustomComponent/Root'

const Notification = () => {
    return (
        <Root>
                <Header leftIcon='back' title='Notification' />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Notification</Text>
                </View>
        </Root>
    )
}

export default memo(Notification)

const styles = StyleSheet.create({})