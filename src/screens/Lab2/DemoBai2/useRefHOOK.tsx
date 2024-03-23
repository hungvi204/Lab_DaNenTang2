import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const UseRefHOOK = () => {
    const [counter, setCounter] = useState(30);
    let timeID: any = useRef();//sử dụng useRef để lưu trữ giá trị không bị thay đổi khi re-render
    //any: kiểu dữ liệu bất kỳ
    //tại sao không dùng let timeID = useRef() mà phải dùng let timeID: any = useRef()?

    console.log(timeID.current)

    const handleStart = () => {
        timeID.current = setInterval(() => {
            setCounter(prevCount => prevCount - 1)
        }, 1000)
        console.log('handleStart ' + timeID.current)
    }

    const handleStop = () => {
        clearInterval(timeID.current)
        console.log('handleStop ' + timeID.current)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{counter}</Text>
            <Button title="Start" onPress={handleStart} />
            <Button title="Stop" onPress={handleStop} />
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

export default UseRefHOOK;