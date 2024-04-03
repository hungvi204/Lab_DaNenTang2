// CounterComponent.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, square, reset } from './actions';

const CounterComponent: React.FC = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <Button title="Tăng biến đếm" onPress={() => dispatch(increment())} />
      <Button title="Giảm biến đếm" onPress={() => dispatch(decrement())} />
      <Button title="Mũ bình phương biến đếm" onPress={() => dispatch(square())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
    },
})

export default CounterComponent;
