import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Root from '../../components/Root'

const Likes = () => {
    return (
        <Root>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Likes</Text>
                </View>
            </SafeAreaView>
        </Root>
    )
}

export default Likes

const styles = StyleSheet.create({})