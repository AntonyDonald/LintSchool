import { BackHandler, SafeAreaView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Root from '../../components/Root'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import DeviceInfo from 'react-native-device-info'
import { screenHeight, screenWidth } from '../../config/Dimension'
import { GREY } from '../../theme/MainColor'
import { useDispatch } from 'react-redux'
import { reduxHelper } from '../../redux/ReduxHelper'
import HomeHeader from '../../components/HomeHeader'


const Home = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [batteryPercentage, setBatteryPercentage] = useState(0);
    const [canExist, setExist] = useState(false);

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
        test()
    }, [])
    const test = async () => {
        const getBattery = await DeviceInfo.getBatteryLevel()
        const percentage = getBattery * 100
        setBatteryPercentage(percentage)
    }
    const handleLogout = () => {
        dispatch({
            type: reduxHelper.UPDATE_USER_DATA,
            payload: null
        })
    }
    return (
        <Root>
            <SafeAreaView style={{ flex: 1 }}>
                <HomeHeader title={'Home'} notification={'Notification'} navigation={navigation} />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Home</Text>
                    <Text>{Math.round(batteryPercentage)}</Text>
                </View>
            </SafeAreaView>
        </Root>

    )
}

export default Home

const styles = StyleSheet.create({
    cameraButton: {
        borderWidth: 1,
        backgroundColor: GREY[200],
        padding: 10,
        borderRadius: screenWidth * 0.02
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})