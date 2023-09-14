import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import { Text } from 'react-native-paper'

const NoDataComponent = ({ title = "", description = "" }) => {
    return (
        <View style={styles.container}>
            <Text variant='titleSmall'>{title}</Text>
            <Text variant='labelSmall'>{description}</Text>
        </View>
    )
}

export default memo(NoDataComponent)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})