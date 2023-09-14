import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { usePageJson } from '../../hooks/appDataHooks/usePageJson'
import Root from '../../common/Root'
import { AllComponents } from '../../config/AllComponents'

const Home = () => {

    const [jsonData, setJsonData] = useState({})

    const getPageJson = async () => {
        const result = await usePageJson('home')
        setJsonData(result)
        console.log('resu', result);
    }
    useEffect(() => {
        getPageJson()
    }, [])
    return (
        <Root>
            <FlatList
                data={jsonData?.components}
                renderItem={({ item, index }) => {
                    console.log('ite,', item);
                    return AllComponents[item?.key]
                }}
            />
        </Root>
    )
}

export default Home

const styles = StyleSheet.create({})