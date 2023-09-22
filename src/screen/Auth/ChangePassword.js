import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../components/theme'
import { GlobalStyleSheet } from '../../components/GlobalStyleSheet'
import { SvgXml } from 'react-native-svg'
import { useNavigation, useTheme } from '@react-navigation/native'
import { useState } from 'react'
import CustomButton from '../../components/CustomComponent/CustomButton'

const ChangePassword = () => {

    const { colors } = useTheme();
    const navigation = useNavigation();

    const [passwordShow, setPasswordShow] = useState(true);
    const [passwordShow2, setPasswordShow2] = useState(true);

    const handndleShowPassword = () => {
        setPasswordShow(!passwordShow);
    }
    const handndleShowPassword2 = () => {
        setPasswordShow2(!passwordShow2);
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Header transparent leftIcon={'back'} />
                    <LinearGradient
                        style={{ flex: 1 }}
                        colors={[COLORS.linear1, COLORS.linear2]}>
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 200,
                        }}>
                            <FastImage
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginBottom: 40,
                                }}
                                source={IMAGES.onboarding}
                                resizeMode='contain'
                            />
                            <FastImage
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                    height: 80,
                                    tintColor: COLORS.backgroundColor,
                                }}
                                source={IMAGES.loginShape}
                                resizeMode='stretch'
                            />
                        </View>
                        <View style={{ backgroundColor: COLORS.backgroundColor }}>
                            <View style={GlobalStyleSheet.container}>
                                <View style={{ marginBottom: 20 }}>
                                    <Text style={[FONTS.h2, { textAlign: 'center', color: COLORS.title }]}>Change Password</Text>
                                    <Text style={[FONTS.font, { textAlign: 'center', color: COLORS.text }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                                </View>
                                <View style={{ marginBottom: 15 }}>
                                    <View style={styles.inputIcon}>
                                        <SvgXml
                                            xml={ICONS.lock}
                                        />
                                    </View>
                                    <TextInput
                                        secureTextEntry={passwordShow}
                                        style={[styles.inputStyle, { borderColor: COLORS.borderColor, color: COLORS.title }]}
                                        placeholder='New Password'
                                        placeholderTextColor={COLORS.text}
                                    />
                                    <TouchableOpacity
                                        onPress={() => handndleShowPassword()}
                                        style={styles.eyeIcon}>
                                        <SvgXml
                                            xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginBottom: 15 }}>
                                    <View style={styles.inputIcon}>
                                        <SvgXml
                                            xml={ICONS.lock}
                                        />
                                    </View>
                                    <TextInput
                                        secureTextEntry={passwordShow2}
                                        style={[styles.inputStyle, { borderColor: COLORS.borderColor, color: COLORS.title }]}
                                        placeholder='Confirm Password'
                                        placeholderTextColor={COLORS.text}
                                    />
                                    <TouchableOpacity
                                        onPress={() => handndleShowPassword2()}
                                        style={styles.eyeIcon}>
                                        <SvgXml
                                            xml={passwordShow2 ? ICONS.eyeClose : ICONS.eyeOpen}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ paddingBottom: 10 }}>
                                    <CustomButton
                                        title="SUBMIT"
                                        onPress={() => navigation.navigate('Login')}
                                    />
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    inputStyle: {
        ...FONTS.fontLg,
        height: 50,
        paddingLeft: 60,
        borderWidth: 1,
        borderRadius: SIZES.radius,
    },
    inputIcon: {
        backgroundColor: COLORS.primary,
        height: 40,
        width: 40,
        borderRadius: 10,
        position: 'absolute',
        left: 5,
        top: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        zIndex: 1,
        top: 0,
    }

})