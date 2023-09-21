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
import { COLORS, IMAGES, SIZES, FONTS, ICONS } from '../../components/theme'
import { GlobalStyleSheet } from '../../components/GlobalStyleSheet'
import CustomButton from '../../components/CustomButton'
// import { useCamera } from 'react-native-camera-hooks'
// import { RNCamera } from 'react-native-camera';
// import RNFS from 'react-native-fs'

const Login = () => {

  const dispatch = useDispatch();

  const reducer = useSelector((state) => state)
  const { userData, snackBar } = reducer;

  const [loginData, setLoginData] = useState({
    username: "",
    password: ''
  })

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
      dispatch({
        type: reduxHelper.UPDATE_SNACKBAR,
        payload: {
          visible: true,
          message: 'userName or password should not be empty'
        }
      })
      return
    }
    if (loginData?.username.trim().length === 0 || loginData?.password.trim().length === 0) {
      dispatch({
        type: reduxHelper.UPDATE_SNACKBAR,
        payload: {
          visible: true,
          message: 'Empty space is not allowed'
        }
      })
      return
    }
    if (data[0]?.username !== loginData?.username || data[0].password !== loginData?.password) {
      dispatch({
        type: reduxHelper.UPDATE_SNACKBAR,
        payload: {
          visible: true,
          message: 'You are not an User'
        }
      })
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
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <DetailHeader></DetailHeader>
        <View style={{ alignItems: 'center', }}>
          <FastImage
            style={styles.image}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUhk6Dil1ODpzFpFzSCAdTfEIgECVsOoPQBhmWzTw4aATsiE_dpMm9Rwyj7rdGyUuhZU&usqp=CAU' }}
            resizeMode='contain'
          />
        </View>
        <View style={styles.username}>
          <TextInput
            label={'username'}
            mode='outlined'
            value={loginData.username}
            onChangeText={(text) => onchangeValue(text, 'username')}
            style={styles.textInput}
          />
          <TextInput
            label={'password'}
            mode='outlined'
            value={loginData.password}
            onChangeText={(text) => onchangeValue(text, 'password')}
            style={styles.textInput}
            secureTextEntry
          />
          <View style={styles.button}>
            <TouchableRipple
              style={[StyleSheet.absoluteFill, { zIndex: 999 }]}
              onPress={() => handleLogin()}
            >
              <View />
            </TouchableRipple>
            <Text variant='labelLarge' style={{ color: '#fff' }}>Login</Text>
          </View>
        </View>
      </ScrollView> */}
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Header transparent leftIcon={'back'} />
          <LinearGradient
            style={{ flex: 1 }}
            colors={['#FFCD90', '#FE9063']}>
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
                    {/* <SvgXml
                      xml={ICONS.user}
                    /> */}
                  </View>
                  <TextInput
                  style={[styles.inputStyle, { borderColor: COLORS.borderColor, color: COLORS.title }]}
                  // defaultValue="jackmadani"
                  placeholder='Email'
                  placeholderTextColor={COLORS.text}
                  />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <View style={styles.inputIcon}>
                    {/* <SvgXml
                      xml={ICONS.lock}
                    /> */}
                  </View>
                  <TextInput
                    // secureTextEntry={passwordShow}
                    style={[styles.inputStyle, { borderColor: COLORS.borderColor, color: COLORS.title }]}
                    placeholder='Password'
                    placeholderTextColor={COLORS.text}
                  />
                  <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Password"
                    accessibilityHint="Password show and hidden"
                    // onPress={() => handndleShowPassword()}
                    style={styles.eyeIcon}>
                    {/* <SvgXml
                      xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen}
                    /> */}
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: 15 }}>
                  <TouchableOpacity
                    style={{ marginLeft: 5 }}
                  >
                    <Text style={[FONTS.fontLg, { color: COLORS.primary, textDecorationLine: 'underline' }]}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 10 }}>
                  <CustomButton
                    title="SIGN IN" />
                </View>

              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default memo(Login)

const styles = StyleSheet.create({
  inputStyle: {
    ...FONTS.fontLg,
    height: 50,
    paddingLeft: 60,
    borderWidth: 1,
    borderRadius: SIZES.radius,
  },
  inputIcon: {
    backgroundColor: COLORS.yellow,
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