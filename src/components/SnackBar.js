import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Snackbar, Text, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { reduxHelper } from '../redux/ReduxHelper'
import { screenHeight } from '../config/Dimension'
import { GREY } from '../theme/MainColor'

const SnackBar = () => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state)
    const { snackBar } = reducer;
    const handleDismiss = () => {
        dispatch({
            type: reduxHelper.UPDATE_SNACKBAR,
            payload: {
                // ...snackBar,
                visible: false,
                message: ''
            }
        })
    }
    return (
        <Snackbar
            visible={snackBar?.visible || false}
            onDismiss={handleDismiss}
            duration={2000}
            // elevation={5}
            style={{
                backgroundColor: '#fff',
                borderLeftWidth: 5,
                borderWidth: 0.5,
                zIndex: 999999,
                borderLeftColor: theme.colors.primary,
                shadowColor: GREY[300],
            }}
        // wrapperStyle={{
        //     top: 0.06 * screenHeight
        // }}
        >
            <Text>{snackBar?.message || 'Something went wrong...'}</Text>
        </Snackbar>
    )
}

export default SnackBar

const styles = StyleSheet.create({})