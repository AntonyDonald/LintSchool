import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/Auth/Login';
import linking from './linking';
import GoToLogin from '../screen/Auth/GoToLogin';
import HomeDrawerNavigator from './HomeDrawerNavigator';
import HomeBottomNav from './HomeBottomNav';
import Camera from '../screen/camera/Camera';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator()

function AuthNav() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
            initialRouteName='GoToLogin'
        >
            <Stack.Screen name='GoToLogin' component={GoToLogin} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}
function HomeNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Stack.Screen name='Home' component={HomeBottomNav} />
            <Stack.Screen name='openCamera' component={Camera} />
        </Stack.Navigator>
    )
}
const Navigator = () => {
    const reducer = useSelector((state) => state)
    const { userData } = reducer
    console.log('user', userData);
    return (
        <NavigationContainer linking={linking}>
            {!!userData ? <HomeNav /> :
                <AuthNav />}
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})