import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Feather } from 'react-native-vector-icons';
import { COLORS, IMAGES, FONTS } from './theme';
import FastImage from 'react-native-fast-image';
import { Divider } from 'react-native-paper';

const HomeHeader = (props) => {

    const { colors } = useTheme();


    return (
        <>
            <View style={{
                height: 50,
                backgroundColor: colors.cardBg,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
            }}>
                <TouchableOpacity
                    // onPress={() => props.drawer && props.drawer()}
                    style={{
                        height: 50,
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Feather color={colors.title} name='menu' size={22} />
                </TouchableOpacity>
                <Text style={{ ...FONTS.h6, color: colors.title, flex: 1, textAlign: 'left' }}>{props.title}</Text>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            height: 18,
                            width: 18,
                            borderRadius: 20,
                            position: 'absolute',
                            top: 7,
                            right: 10,
                            zIndex: 1,
                            backgroundColor: COLORS.warning,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ ...FONTS.fontXs, color: COLORS.white, ...FONTS.fontBold, lineHeight: 17 }}>0</Text>
                    </View>
                    <Feather color={colors.title} name='bell' size={22} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8,
                            zIndex: 1,
                            borderWidth: 2,
                            borderColor: colors.card,
                            backgroundColor: COLORS.success,
                            height: 12,
                            width: 12,
                            borderRadius: 10,
                        }}
                    />
                    <FastImage
                        style={{
                            height: 28,
                            width: 28,
                            borderRadius: 20,
                            borderWidth: 1,
                        }}
                        source={IMAGES.profile}
                    />
                </TouchableOpacity>
            </View>
            <Divider />
        </>
    );
};



export default HomeHeader;