import { BackHandler, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react'
import Root from '../../common/Root'
import OnBoarding from './OnBoarding'
import { Text, TouchableRipple } from 'react-native-paper';
import { Fontisto } from 'react-native-vector-icons'
import { screenHeight, screenWidth } from '../../config/Dimension';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { reduxHelper } from '../../redux/ReduxHelper';

const GoToLogin = () => {

    const [canExist, setExist] = useState(false);

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
    return (
        <Root>
            <OnBoarding />
            <View style={styles.login}>
                <TouchableRipple
                    style={[StyleSheet.absoluteFill, { zIndex: 999 }]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <View />
                </TouchableRipple>
                <Text variant='titleLarge' style={{ marginRight: screenWidth * 0.02, color: 'blue' }} >Check My Diary</Text>
                <Fontisto name='arrow-right-l' size={30} color={'blue'} />

            </View>
        </Root>
    )
}

export default memo(GoToLogin)

const styles = StyleSheet.create({
    login: {
        bottom: screenHeight * 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        padding: screenWidth * 0.01,
        marginLeft: screenWidth * 0.15,
        marginRight: screenWidth * 0.15,
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: screenWidth * 0.05,
        overflow: 'hidden'
    }
})