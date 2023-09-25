import { BackHandler, PermissionsAndroid, SafeAreaView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { screenHeight, screenWidth } from '../../config/Dimension'
import { GREY } from '../../theme/MainColor'
import { useDispatch } from 'react-redux'
import { reduxHelper } from '../../redux/ReduxHelper'
import HomeHeader from '../../components/headers/HomeHeader'
import Root from '../../components/CustomComponent/Root';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TOKEN } from '../../config/Keys'


const Home = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [canExist, setExist] = useState(false);

    useEffect(async () => {
        const check = await AsyncStorage.getItem(TOKEN)
        console.log('ckeck', check);
    }, [])

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
    // const requestCameraPermission = async () => {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             {
    //                 title: 'Location Permission',
    //                 message:
    //                     'School App needs access to your Location ',
    //                 buttonNeutral: 'Ask Me Later',
    //                 buttonNegative: 'Cancel',
    //                 buttonPositive: 'OK',
    //             },
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             location()
    //         } else {
    //             console.log('location permission denied');
    //         }
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // };


    // const location = async () => {
    //     Geolocation.getCurrentPosition(
    //         (position) => {
    //             console.log('position', position);
    //         },
    //         (error) => {
    //             // See error code charts below.
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //     );
    // }

    const handleLogout = () => {
        dispatch({
            type: reduxHelper.UPDATE_USER_DATA,
            payload: null
        })
    }
    return (
        <Root>
            <HomeHeader title={'Home'} notification={'Notification'} navigation={navigation} />
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Home</Text>
            </View>
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