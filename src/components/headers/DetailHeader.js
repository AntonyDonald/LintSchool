import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, IconButton,} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { screenHeight, screenWidth } from '../../config/Dimension';

const isIOS = Platform.OS === 'ios'

export default function DetailHeader({ children, action, hideBackButton = false, onBackClick }) {

    const navigation = useNavigation();

    const onBackButtonClick = () => {
        if (onBackClick) {
            onBackClick()
        }
        else {
            navigation.goBack()
        }
    }

    return (
        <>
            <View style={styles.Container} >
                <View style={styles.Row} >
                    {
                        !hideBackButton &&
                        <IconButton icon={isIOS ? 'chevron-left' : 'arrow-left'} onPress={() => onBackButtonClick()} />
                    }
                    <Text variant='titleSmall' numberOfLines={1} style={{ maxWidth: 0.8 * screenWidth, marginLeft: hideBackButton ? 0.05 * screenWidth : undefined, fontFamily: 'Bold' }} >{children}</Text>
                </View>
                {action}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    Container: {
        height: 0.08 * screenHeight,
        width: screenWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ProgressBar: {
        height: 2,
        position: 'absolute',
        bottom: 0
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})