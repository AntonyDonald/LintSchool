import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { memo } from 'react'
import Root from '../../components/CustomComponent/Root'

const Profile = () => {
    return (
        <Root>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Profile</Text>
                </View>
            </SafeAreaView>
        </Root>
    )
}

export default memo(Profile)

const styles = StyleSheet.create({})