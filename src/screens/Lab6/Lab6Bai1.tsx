import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { decrement, increment, multiply, reset} from "../../store/counterSlice";
import { useAppDispatch, useAppSelector } from "../../store/useRedux";

const Lab6Bai1 = () => {
    const count = useAppSelector((state: any) => state.counter.value)
    const dispatch = useAppDispatch();

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    const onIncrementByAmount = () => {
        dispatch(multiply(3))
    }

    const onReset = () => {
        dispatch(reset())
    }
    return (
        <View>
            <Text style={styles.text}>{count}</Text>
            <Button title="Tăng biến đếm" onPress={onIncrement} />
            <Button title="Giảm biến đếm" onPress={onDecrement} />
            <Button title="Mũ bình phương biến đếm" onPress={onIncrementByAmount} />
            <Button title="Reset biến đếm" onPress={onReset} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
    }
})    

export default Lab6Bai1;