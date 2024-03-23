import React, { useRef, useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const UseEffectHOOK = () => {
    const [counter, setCounter] = useState(30);
    const [count, setCount] = useState(1);
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

    const increaseCounter = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('useEffect này chạy mỗi lần component re-render')
    })
    useEffect(() => {
        console.log('useEffect này chạy 1 lần component re-render')
    }, [])
    useEffect(() => {
        console.log('useEffect này chạy khi state counter thay đổi giá trị')
    }, [counter])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <Button title="Increase" onPress={increaseCounter} />
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

export default UseEffectHOOK;