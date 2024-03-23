import React, {useState, memo} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MemoHOOK = () => {
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

export default memo(MemoHOOK);//sử dụng memo để giữ lại giá trị trước đó khi re-render