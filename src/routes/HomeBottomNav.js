import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from '../screen/Home/Home'
import FastImage from 'react-native-fast-image'
import { screenHeight } from '../config/Dimension'
import { GREY } from '../theme/MainColor'

const HomeBottomNav = () => {

    const Tab = createMaterialBottomTabNavigator();
    const ICON_SIZE = 18
    const ICON = 22
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: 'grey', borderTopWidth: 0.5, borderColor: GREY[400], marginTop: screenHeight * -0.012, top: screenHeight * 0.012 }}
            // activeColor={theme.colors.primary}
            sceneAnimationEnabled={true}
            sceneAnimationType='shifting'
        >

            <Tab.Screen
                name={'Dashboard'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color }) => <FastImage source={{ uri: 'https://www.linkpicture.com/q/me_16.png' }} style={{ height: ICON, width: ICON, top: screenHeight * 0 }} />,


                }}
            />

            <Tab.Screen
                name={'Myself'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color }) => <FastImage source={{ uri: 'https://www.linkpicture.com/q/me_16.png' }} style={{ height: ICON, width: ICON, top: screenHeight * 0 }} />,

                }}
            />

        </Tab.Navigator>
    )
}

export default HomeBottomNav

const styles = StyleSheet.create({})