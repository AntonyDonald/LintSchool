import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Root from '../../components/CustomComponent/Root'

const Chat = () => {
    return (
        <Root>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Chat</Text>
                </View>
            </SafeAreaView>
        </Root>
    )
}

export default Chat

const styles = StyleSheet.create({})