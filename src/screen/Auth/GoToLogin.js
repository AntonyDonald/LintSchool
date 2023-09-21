import { BackHandler, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react'
import Root from '../../components/Root'
import OnBoarding from './OnBoarding'
import { Button, Text, TouchableRipple } from 'react-native-paper';
import { Fontisto } from 'react-native-vector-icons'
import { screenHeight, screenWidth } from '../../config/Dimension';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { reduxHelper } from '../../redux/ReduxHelper';
import { GREY } from '../../theme/MainColor';

const GoToLogin = () => {

    const [canExist, setExist] = useState(false);
    const [indexValue, setIndexValue] = useState(0);
    const [scrollIndexValue, setScrollIndexValue] = useState(0)

    const navigation = useNavigation()
    const dispatch = useDispatch()

    useFocusEffect(
        useCallback(() => {
            const backAction = () => {
                if (canExist) {
                    BackHandler.exitApp()
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

    useEffect(() => {
        dispatch({
            type: reduxHelper.UPDATE_NAVIGATION,
            payload: navigation
        })
    }, [])
    const handleValue = (data) => {
        setIndexValue(data)
        if (data !== 4) {
            setScrollIndexValue(undefined)
        }

    }
    return (
        <Root >
            <View style={{ backgroundColor: '#070D33' }}>
                <View style={{ height: screenHeight, width: screenWidth }}>
                    <OnBoarding value={handleValue} customData={scrollIndexValue} />
                </View>
<View>
    <Button>tst</Button>
</View>
                
            </View>
        </Root>
    )
}

export default memo(GoToLogin)

const styles = StyleSheet.create({
    login: {
        bottom: screenHeight * 0.1,
        borderWidth: 1,
        padding: screenWidth * 0.035,
        // marginLeft: screenWidth * 0.15,
        // marginRight: screenWidth * 0.15,
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: screenWidth * 0.02,
        overflow: 'hidden',
        // position: 'absolute',
        // alignSelf: 'center',
        backgroundColor: '#1939B7',
        width: screenWidth,
    },
    text: {
        color: '#fff',
        fontStyle: 'italic',
        textAlign: 'center',
        alignContent : 'center'
    }
})



{/* <View style={styles.login}>
                    <TouchableRipple
                        style={[StyleSheet.absoluteFill, { zIndex: 999 }]}
                        onPress={() => {
                            if (indexValue === 4) {
                                navigation.navigate('Login')
                            } else {
                                setScrollIndexValue(4)
                                setIndexValue(4)
                            }
                        }}

                    >
                        <View />
                    </TouchableRipple>
                    <Text variant='titleLarge' style={styles.text} >{indexValue === 4 ? 'Login' : 'Skip'}</Text>
                    {/* <Fontisto name='arrow-right-l' size={30} color={'#fff'} /> */}

                // </View> */}