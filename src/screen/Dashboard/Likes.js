import { StyleSheet, View, } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import { useTheme } from '@react-navigation/native'
import { useRef } from 'react'
import OptionBar from '../../components/BottomSheet/OpitonBar'
import { Button } from 'react-native-paper'

const Likes = () => {
    const { colors } = useTheme();
    const refRBSheet = useRef();
    return (
        <>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={270}
                openDuration={100}
                customStyles={{
                    wrapper: {
                    },
                    container: {
                        backgroundColor: colors.card,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                    },
                    draggableIcon: {
                        marginTop: 5,
                        marginBottom: 0,
                        height: 5,
                        width: 90,
                        backgroundColor: colors.borderColor,
                    }
                }}
            >
                <OptionBar />

            </RBSheet>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button onPress={() => refRBSheet.current.open()}>Open Bottom Sheet</Button>
            </View>
        </>
    )
}

export default Likes

const styles = StyleSheet.create({})