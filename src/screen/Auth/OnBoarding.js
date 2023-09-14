import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Root from '../../common/Root'
import FastImage from 'react-native-fast-image'
import { screenHeight, screenWidth } from '../../config/Dimension'
import { Text } from 'react-native-paper'

const OnBoarding = () => {
    return (
        <Root>
            <View style={styles.text}>
                <Text variant='headlineMedium' style={{ textAlign: 'center' }}>My Child's Diary</Text>
                <Text variant='labelLarge' style={styles.lable}>Children are great imitators. So give them something great to imitate.</Text>
            </View>
            <View style={styles.OnBoarding}>
                <FastImage
                    style={{ height: screenHeight, width: screenWidth }}
                    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/896/415/original/books-illustration-cartoon-books-books-vector.jpg' }}
                    resizeMode='center'
                />
            </View>

        </Root>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    OnBoarding: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        position: 'absolute',
        alignSelf: 'center',
        top: screenHeight * 0.05
    },
    lable: {
        textAlign: 'auto',
        fontSize: 15,
        margin: screenWidth * 0.02
    }
})