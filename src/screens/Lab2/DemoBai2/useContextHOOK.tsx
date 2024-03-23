import { Button, Text, View } from "react-native"
import Paragraph from "./paragraph"
import { useState, createContext } from "react"


const UseContex = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <View>
            <ThemeContext.Provider value={theme}>
                <Text>UseContex</Text>
                <Button title="Change theme" onPress={toggleTheme} />
                <Paragraph />
            </ThemeContext.Provider>
        </View>
    )
}

export const ThemeContext = createContext('light')

export default UseContex