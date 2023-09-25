import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  PermissionsAndroid
} from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import Header from '../../components/headers/Header'
import { useLogin } from '../../hooks/useLogin';
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, IMAGES, SIZES, FONTS, ICONS } from '../../components/styles/theme'
import { GlobalStyleSheet } from '../../components/styles/GlobalStyleSheet'
import { SvgXml } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomComponent/CustomButton'
import DeviceInfo from 'react-native-device-info'
import Geolocation from 'react-native-geolocation-service';
import { snackBar } from '../../components/CustomComponent/SnackBar';

const Login = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const reducer = useSelector((state) => state)

  const [passwordShow, setPasswordShow] = useState(true);
  const [loginData, setLoginData] = useState({
    username: "",
    password: '',

  })
  const [batteryPercentage, setBatteryPercentage] = useState(0);
  const [deviceId, setDeviceId] = useState('');
  const [model, setModel] = useState('');

  const handndleShowPassword = () => {
    setPasswordShow(!passwordShow);
  }
  useEffect(() => {
    MobileDetails()
    requestLocationPermission()
  }, [])

  const MobileDetails = async () => {
    const getBattery = await DeviceInfo.getBatteryLevel()
    const percentage = getBattery * 100
    setBatteryPercentage(percentage)

    const id = await DeviceInfo.getDeviceId()
    setDeviceId(id)

    const model = await DeviceInfo.getModel()
    setModel(model)

  }

  const data = [
    {
      "id": 1,
      "username": "admin",
      "password": "admin"
    }
  ]
  const onchangeValue = (text, label) => {
    setLoginData((oldData) => ({
      ...oldData,
      [label]: text
    }))
  }

  const location = async () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('position', position);
        loginData['latitude'] = String(position?.coords?.latitude)
        loginData['longitude'] = String(position?.coords?.longitude)
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'School App needs access to your Location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        location()
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.log('location permission Error', err);
    }
  };

  const handleLogin = async () => {

    // if (loginData?.username === '' || loginData?.password === "") {
    //   const text = 'Enter user name and password'
    //   const bgColor = COLORS?.warning
    //   snackBar(text, bgColor)
    //   return
    // }
    // if (loginData?.username.trim().length === 0 || loginData?.password.trim().length === 0) {
    //   const text = 'Empty space is not allowed'
    //   const bgColor = COLORS?.warning
    //   snackBar(text, bgColor)
    //   return
    // }
    // if (data[0]?.username !== loginData?.username || data[0].password !== loginData?.password) {
    //   const text = 'You are not an User'
    //   const bgColor = COLORS?.danger
    //   snackBar(text, bgColor)
    //   return
    // }

    loginData['battery_percentage'] = String(batteryPercentage)
    loginData['device_id'] = String(deviceId)
    loginData['device_model'] = String(model)
    const result = await useLogin(loginData)
    console.log('result', result);
    if (result?.success == 'False') {
      const bgColor = COLORS?.danger
      snackBar(result?.message, bgColor)
      return
    }
    if (result?.success == true) {
      const bgColor = COLORS?.success
      snackBar(result?.message, bgColor);
      
    }
    navigation?.navigate('Dashboard')

    setLoginData({
      username: "",
      password: ""
    })
  }

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
                <View style={{ marginBottom: 20 }}>
                  <Text style={[FONTS.h2, { textAlign: 'center', color: COLORS.title }]}>Sign in</Text>
                  <Text style={[FONTS.font, { textAlign: 'center', color: COLORS.text }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <View style={styles.inputIcon}>
                    <SvgXml
                      xml={ICONS.user}
                    />
                  </View>
                  <TextInput
                    style={[styles.inputStyle, { borderColor: COLORS.borderColor, color: COLORS.title }]}
                    // defaultValue="jackmadani"
                    value={loginData.username}
                    onChangeText={(text) => onchangeValue(text, 'username')}
                    placeholder='Email'
                    placeholderTextColor={COLORS.text}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <View style={styles.inputIcon}>
                    <SvgXml
                      xml={ICONS.lock}
                    />
                  </View>
                  <TextInput
                    secureTextEntry={passwordShow}
                    style={[styles.inputStyle, { borderColor: COLORS.borderColor, color: COLORS.title }]}
                    placeholder='Password'
                    placeholderTextColor={COLORS.text}
                    value={loginData.password}
                    onChangeText={(text) => onchangeValue(text, 'password')}
                  />
                  <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Password"
                    accessibilityHint="Password show and hidden"
                    onPress={() => handndleShowPassword()}
                    style={styles.eyeIcon}>
                    <SvgXml
                      xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: 15 }}>
                  <TouchableOpacity
                    style={{ marginLeft: 5 }}
                    onPress={() => navigation.navigate('Forgot')}
                  >
                    <Text style={[FONTS.fontLg, { color: COLORS.primary, textDecorationLine: 'underline' }]}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 10 }}>
                  <CustomButton
                    title="SIGN IN" onPress={() => handleLogin()} />
                </View>

              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  inputStyle: {
    ...FONTS.fontLg,
    height: 50,
    paddingLeft: 60,
    borderWidth: 1,
    borderRadius: SIZES.radius,
  },
  inputIcon: {
    backgroundColor: COLORS.primary,
    height: 40,
    width: 40,
    borderRadius: 10,
    position: 'absolute',
    left: 5,
    top: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    zIndex: 1,
    top: 0,

  }
})