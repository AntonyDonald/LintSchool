import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../components/theme'
import { GlobalStyleSheet } from '../../components/GlobalStyleSheet'
import CustomButton from '../../components/CustomButton'
import { SvgXml } from 'react-native-svg'
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation, useTheme } from '@react-navigation/native'

const ForgotPassword = () => {

  const { colors } = useTheme();
  const navigation = useNavigation();

  const countriesWithFlags = [
    { title: '+91', image: IMAGES.india },
  ];

  return (
    <>
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
                  <Text style={[FONTS.h2, { textAlign: 'center', color: COLORS.title }]}>Forgot Password</Text>
                  <Text style={[FONTS.font, { textAlign: 'center', color: COLORS.text }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                </View>
                <View style={[styles.inputStyle, { borderColor: COLORS.borderColor }]}>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <SelectDropdown
                      data={countriesWithFlags}
                      defaultValue={countriesWithFlags[0]}
                      onSelect={(selectedItem, index) => { }}
                      buttonStyle={{
                        padding: 0,
                        backgroundColor: 'transparent',
                        width: 82,
                        paddingRight: 0,
                        height: 24,
                      }}
                      renderCustomizedButtonChild={(selectedItem, index) => {
                        return (
                          <View style={{ flexDirection: 'row' }}>
                            {selectedItem ?
                              <View
                                style={{
                                  borderWidth: 1,
                                  borderColor: COLORS.borderColor,
                                  overflow: 'hidden',
                                  marginRight: 6,
                                }}
                              >
                                <FastImage
                                  style={{
                                    width: 30,
                                    height: 20,
                                  }}
                                  source={selectedItem.image}
                                />
                              </View>
                              : undefined
                            }
                            <Text style={{ ...FONTS.fontLg, color: colors.title }}>{selectedItem ? selectedItem.title : '000'}</Text>
                          </View>
                        );
                      }}
                      dropdownStyle={{
                        width: 100,
                        borderRadius: 4,
                      }}
                      rowStyle={{
                        height: 40,
                        borderBottomColor: COLORS.borderColor,
                      }}
                      renderCustomizedRowChild={(item, index) => {
                        return (
                          <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View
                              style={{
                                borderWidth: 1,
                                borderColor: COLORS.borderColor,
                                overflow: 'hidden',
                                marginRight: 6,
                              }}
                            >
                              <FastImage
                                style={{
                                  width: 30,
                                  height: 20,
                                }}
                                source={item.image}
                              />
                            </View>
                            <Text style={{ ...FONTS.fontLg, color: COLORS.title }}>{item.title}</Text>
                          </View>
                        );
                      }}
                    />
                  </View>

                  <TextInput
                    style={{
                      ...FONTS.fontLg,
                      color: COLORS.title,
                      flex: 1,
                      top: 1,
                    }}
                    keyboardType='number-pad'
                    placeholder='Phone number'
                    placeholderTextColor={COLORS.text}
                  />
                </View>
                <View style={{ paddingBottom: 10, flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => navigation?.goBack()}
                    style={{
                      backgroundColor: '#505050',
                      width: 50,
                      borderRadius: SIZES.radius,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}
                  >
                    <SvgXml
                      style={{ marginLeft: 6 }}
                      xml={ICONS.back}
                    />
                  </TouchableOpacity>
                  <View style={{ flex: 1 }}>
                    <CustomButton
                      onPress={() => navigation.navigate('OTP')}
                      title="NEXT"
                    />
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({

  inputStyle: {
    height: 50,
    padding: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
})