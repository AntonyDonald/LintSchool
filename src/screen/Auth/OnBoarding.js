import {
    Animated,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
    BackHandler,
    ToastAndroid
} from 'react-native'
import React, { Fragment, } from 'react'
import FastImage from 'react-native-fast-image'
import { screenHeight, screenWidth } from '../../config/Dimension'
import { } from 'react-native-paper'
import { useRef } from 'react'
import { COLORS, FONTS, IMAGES } from '../../components/theme'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useCallback } from 'react'

const OnBoarding = () => {

    const navigation = useNavigation();
    const [canExist, setExist] = useState(false);

    useFocusEffect(
        useCallback(() => {
            const backAction = () => {
                if (canExist) {
                    BackHandler.exitApp()
                    setExist(false)
                }
                else {
                    setExist(true)
                    ToastAndroid.show("Press again to close the app!", 3000)
                }
                return true;
            };

            const subscription = BackHandler.addEventListener('hardwareBackPress', backAction);

            return () => subscription.remove();
        }, [canExist])
    );

    const DATA = [
        {
            title: 'Let’s get started',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        },
        {
            title: 'Let’s get started',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        },
        {
            title: 'Let’s get started',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        },
    ]

    const scrollValue = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <LinearGradient
                    style={{ flex: 1 }}
                    colors={[COLORS.linear1, COLORS.linear2]}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: screenHeight / 2.3,
                    }}>
                        <FastImage
                            style={{
                                width: 130,
                                height: 130,

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
                    <View style={{ backgroundColor: COLORS.backgroundColor, flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <ScrollView
                                horizontal
                                pagingEnabled
                                scrollEventThrottle={16}
                                decelerationRate="fast"
                                showsHorizontalScrollIndicator={false}
                                onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
                                    { useNativeDriver: false },
                                )}>
                                {DATA.map((data, index) => (

                                    <View style={[styles.slideItem]} key={index}>
                                        <Text style={[FONTS.h2, { textAlign: 'center', color: COLORS.title, fontWeight: '800' }]}>{data.title}</Text>
                                        <Text style={[FONTS.font, { textAlign: 'center', color: COLORS.text, fontWeight: '600' }]}>{data.desc}</Text>
                                    </View>

                                ))}
                            </ScrollView>
                            <View style={styles.indicatorConatiner} pointerEvents="none">
                                {DATA.map((x, i) => (
                                    <Indicator i={i} key={i} scrollValue={scrollValue} />
                                ))}
                            </View>

                        </View>
                        <View style={styles.container}>
                            <View style={{ paddingBottom: 15 }}>
                                <CustomButton title={'Get Start'} onPress={() => navigation.navigate('Login')} />
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    )
}


function Indicator({ i, scrollValue }) {
    const translateX = scrollValue.interpolate({
        inputRange: [-screenWidth + i * screenWidth, i * screenWidth, screenWidth + i * screenWidth],
        outputRange: [-20, 0, 20],
    });
    return (
        <View style={styles.indicator}>
            <Animated.View
                style={[styles.activeIndicator, { transform: [{ translateX }] }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        //maxWidth : 575,
        marginLeft: 'auto',
        marginRight: 'auto',
        //backgroundColor:'red',
        width: '100%',
    },
    slideItem: {
        width: screenWidth,
        alignItems: 'center',
        padding: 25,
        paddingBottom: 50,
    },
    indicatorConatiner: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
    },
    indicator: {
        height: 10,
        width: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 5,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 4,
        overflow: 'hidden',
    },
    activeIndicator: {
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 10,

    },
})
export default OnBoarding


