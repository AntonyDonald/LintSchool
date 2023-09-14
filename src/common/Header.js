import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Root from './Root'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

const Header = () => {
  // const reducer = useSelector((state) => state)
  // const { navigation } = reducer;

  return (
    <>
      <View>
        <View>
          <MaterialCommunityIcons name='menu' size={25} />
          <Text></Text>
        </View>
      </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({})