import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../styles/theme'

const CustomButton = (props) => {
    return (
            <TouchableOpacity
                disabled={props.disabled}
                activeOpacity={.75}
                style={[
                    { ...styles.customButton },
                    props.btnSm && { height: 40 },
                    props.color && { backgroundColor: props.color },
                    props.btnLight && { backgroundColor: '#E6E6E6', elevation: 0, shadowOpacity: 0 },
                    props.disabled && { backgroundColor: '#ADD3FF', elevation: 0, shadowOpacity: 0, }]}
                onPress={() => props.onPress ? props.onPress() : ""}
            >
                <Text style={[{ ...FONTS.fontLg, color: COLORS.white, textAlign: 'center' }, props.btnLight && { color: '#646464' }]}>{props.title}</Text>
            </TouchableOpacity>
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
        width: '100%'
    },
    text: {
        textAlign: 'center',

    }
})