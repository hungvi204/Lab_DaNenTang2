import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ThemeContext } from './useContextHOOK'

const Paragraph = () => {
    const theme = useContext(ThemeContext)// Sử dụng useContext để lấy giá trị từ ThemeContext
    return (
        <View style={{backgroundColor:theme === 'light' ? 'white':'gray'}}>
            <Text>Demo change theme react native Hook useContext</Text>
            <Text>Demo change theme react native Hook useContext</Text>
            <Text>Demo change theme react native Hook useContext</Text>
        </View> 
    )
}

export default Paragraph