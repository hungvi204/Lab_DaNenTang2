import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const UseStateHOOK = () => {
    const [counter, setCounter] = useState(1);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{counter}</Text>
            <Button title="Increase" onPress={increaseCounter} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default UseStateHOOK;