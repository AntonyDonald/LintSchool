import { StyleSheet, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import linking from './linking';
import HomeBottomNav from './HomeBottomNav';
import Camera from '../screen/camera/Camera';
import { useSelector } from 'react-redux';
import OnBoarding from '../screen/Auth/OnBoarding';
import HomeDrawerNavigator from './HomeDrawerNavigator';
import Login from '../screen/Auth/Login';
import Notification from '../screen/Notification/Notification';
import Account from '../screen/Account/Account';
import ForgotPassword from '../screen/Auth/ForgotPassword';
import OTPVerification from '../screen/Auth/OTPVerification';

const Stack = createStackNavigator()

function AuthNav() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
            initialRouteName='onBoarding'
        >
            <Stack.Screen name='onBoarding' component={OnBoarding} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Forgot' component={ForgotPassword} />
            <Stack.Screen name='OTP' component={OTPVerification} />
            <Stack.Screen name='Dashboard' component={HomeNav} />
        </Stack.Navigator>
    )
}
function HomeNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Stack.Screen name='Home' component={HomeDrawerNavigator} />
            <Stack.Screen name='openCamera' component={Camera} />
            <Stack.Screen name='Notification' component={Notification} />
            <Stack.Screen name='Account' component={Account} />

        </Stack.Navigator>
    )
}
const Navigator = () => {
    const reducer = useSelector((state) => state)
    const { userData } = reducer
    return (
        <NavigationContainer linking={linking}>
            {!!userData ? <HomeNav /> :
                <AuthNav />}
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})