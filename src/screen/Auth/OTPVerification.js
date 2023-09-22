import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../components/styles/theme';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { SvgXml } from 'react-native-svg';
import { GlobalStyleSheet } from '../../components/styles/GlobalStyleSheet';
import CustomButton from '../../components/CustomComponent/CustomButton';

const OTPVerification = () => {

    const { colors } = useTheme();
    const navigation = useNavigation();

    const [otpValue, setOtpValue] = useState(true);

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
                                <View>
                                    <Text style={[FONTS.h2, { textAlign: 'center', color: COLORS.title }]}>Enter Code</Text>
                                    <Text style={[FONTS.font, { textAlign: 'center', color: COLORS.text }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <OTPInputView
                                        style={{ width: 270, height: 50, marginVertical: 20 }}
                                        pinCount={4}
                                        autoFocusOnLoad
                                        codeInputFieldStyle={{
                                            color: COLORS.title,
                                            fontSize: 20,
                                            fontWeight: '600',
                                            height: 50,
                                            width: 60,
                                            borderRadius: SIZES.radius,
                                            borderColor: COLORS.borderColor,
                                            textAlign: 'center',
                                        }}
                                        onCodeChanged={(code => {
                                            if (code.length == 4) {
                                                setOtpValue(false);
                                            } else {
                                                setOtpValue(true);
                                            }
                                        })}
                                        codeInputHighlightStyle={{
                                            borderColor: COLORS.primary,
                                        }}
                                        keyboardType='number-pad'
                                    />
                                </View>


                                <View style={{ paddingBottom: 10, flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: COLORS?.backArrow,
                                            width: 50,
                                            borderRadius: SIZES.radius,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: 10,
                                        }}
                                        onPress={() => navigation.goBack()}
                                    >
                                        <SvgXml
                                            style={{ marginLeft: 6 }}
                                            xml={ICONS.back}
                                        />
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}>
                                        <CustomButton
                                            disabled={otpValue}
                                            title="NEXT"
                                            onPress={() => navigation.navigate('ChangePassword')}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 15, marginTop: 5 }}>
                                    <Text style={[FONTS.font, { color: COLORS.text }]}>Didn’t you received any code?</Text>
                                    <TouchableOpacity
                                        style={{ marginLeft: 5 }}>
                                        <Text style={[FONTS.fontLg, { color: COLORS.primary, textDecorationLine: 'underline' }]}>Resend</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default OTPVerification

const styles = StyleSheet.create({})