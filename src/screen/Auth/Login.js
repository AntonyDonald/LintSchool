import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from 'react-native'
import React, { memo, useState } from 'react'
import FastImage from 'react-native-fast-image'
import Header from '../../components/Header'
import DetailHeader from '../../components/DetailHeader'
import { useLogin } from '../../hooks/useLogin';
import { useDispatch, useSelector } from 'react-redux'
import { reduxHelper } from '../../redux/ReduxHelper'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, IMAGES, SIZES, FONTS, ICONS } from '../../components/styles/theme'
import { GlobalStyleSheet } from '../../components/styles/GlobalStyleSheet'
import { SvgXml } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import { snackBar } from '../../components/CustomComponent/SnackBar'
import CustomButton from '../../components/CustomComponent/CustomButton'
// import { useCamera } from 'react-native-camera-hooks'
// import { RNCamera } from 'react-native-camera';
// import RNFS from 'react-native-fs'

const Login = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const reducer = useSelector((state) => state)

  const [passwordShow, setPasswordShow] = useState(true);
  const [loginData, setLoginData] = useState({
    username: "",
    password: ''
  })

  const handndleShowPassword = () => {
    setPasswordShow(!passwordShow);
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


  const handleLogin = async () => {

    if (loginData?.username === '' || loginData?.password === "") {
      const text = 'Enter user name and password'
      const bgColor = COLORS?.warning
      snackBar(text, bgColor)
      return
    }
    if (loginData?.username.trim().length === 0 || loginData?.password.trim().length === 0) {
      const text = 'Empty space is not allowed'
      const bgColor = COLORS?.warning
      snackBar(text, bgColor)
      return
    }
    if (data[0]?.username !== loginData?.username || data[0].password !== loginData?.password) {
      const text = 'You are not an User'
      const bgColor = COLORS?.danger
      snackBar(text, bgColor)
      return
    }
    dispatch({
      type: reduxHelper.UPDATE_USER_DATA,
      payload: 'Success'
    })
    setLoginData({
      username: "",
      password: ""
    })
    // const result = await useLogin(loginData)
    // console.log('result', result?.data);
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