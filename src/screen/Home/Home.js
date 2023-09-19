import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { usePageJson } from '../../hooks/appDataHooks/usePageJson'
import Root from '../../common/Root'
import { AllComponents } from '../../config/AllComponents'
import { Button, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import DeviceInfo from 'react-native-device-info'
import { screenHeight, screenWidth } from '../../config/Dimension'
import { GREY } from '../../theme/MainColor'
import { useDispatch } from 'react-redux'
import { reduxHelper } from '../../redux/ReduxHelper'


const Home = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()

    // const [jsonData, setJsonData] = useState({})

    // const getPageJson = async () => {
    //     const result = await usePageJson('home')
    //     setJsonData(result)
    //     console.log('resu', result);
    // }
    // useEffect(() => {
    //     getPageJson()
    // }, [])
    const [batteryPercentage, setBatteryPercentage] = useState(0)
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
            <View style={styles.container}>
                <View style={styles.cameraButton}>
                    <TouchableRipple
                        style={[StyleSheet.absoluteFill, { zIndex: 999 }]}
                        onPress={() => navigation.navigate('openCamera')}
                    >
                        <View />
                    </TouchableRipple>
                    <Text variant='bodyLarge'>Open Camera</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Button onPress={handleLogout}>Logout</Button>

                </TouchableOpacity>
            </View>
            {/* <FlatList
                data={jsonData?.components}
                renderItem={({ item, index }) => {
                    console.log('ite,', item);
                    return AllComponents[item?.key]
                }}
            /> */}


            <Text>{batteryPercentage}%</Text>
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