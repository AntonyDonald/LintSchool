import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from './theme'

const CustomButton = (props) => {
    return (
        <View style={styles.customButton}>
            <TouchableOpacity
                disabled={props.disabled}
                activeOpacity={.75}
                style={[
                    { ...styles.button, width: '100%' },
                    props.btnSm && { height: 40 },
                    props.color && { backgroundColor: props.color },
                    props.btnLight && { backgroundColor: '#E6E6E6', elevation: 0, shadowOpacity: 0 },
                    props.disabled && { backgroundColor: '#C9C9C9', elevation: 0, shadowOpacity: 0 }]}
                onPress={() => props.onPress ? props.onPress() : ""}
            >
                <Text style={[{ ...FONTS.fontLg, color: COLORS.white, textAlign: 'center' }, props.btnLight && { color: '#646464' }]}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    customButton: {
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',

    }
})