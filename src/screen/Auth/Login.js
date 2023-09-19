import { Keyboard, ScrollView, StyleSheet, View } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import Root from '../../common/Root'
import { Button, Text, TextInput, TouchableRipple } from 'react-native-paper'
import { screenHeight, screenWidth } from '../../config/Dimension'
import FastImage from 'react-native-fast-image'
import { PRIMARY } from '../../theme/MainColor'
import Header from '../../common/Header'
import DetailHeader from '../../common/DetailHeader'
import { useLogin } from '../../hooks/useLogin';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { reduxHelper } from '../../redux/ReduxHelper'
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
    <Root>
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
      {/* <Button onPress={() => setOpenCamera(true)}>Open Camera</Button> */}
    </Root>
  )
}

export default memo(Login)

const styles = StyleSheet.create({
  username: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: screenHeight * 0.05
  },
  button: {
    alignItems: 'center',
    marginTop: screenHeight * 0.01,
    marginBottom: screenHeight * 0.02,
    marginLeft: screenWidth * 0.25,
    marginRight: screenWidth * 0.25,
    backgroundColor: PRIMARY.main,
    padding: 10,
    borderRadius: screenWidth * 0.02
  },
  textInput: {
    margin: screenWidth * 0.03,
    borderRadius: screenWidth * 0.02
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.2,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

})