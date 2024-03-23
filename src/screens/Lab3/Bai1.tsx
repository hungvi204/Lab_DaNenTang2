import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated"; 


const Lab3Bai1 = () => {
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(offset.value * 2)}]
        }
    });

    const handlePress = () => {
        offset.value += 50;
      };

    return (
        <View style={styles.container}>
            <Button title="Press me" onPress={handlePress} />
            <Animated.View style={[styles.body, animatedStyles]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    body: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 50,
    }
});

export default Lab3Bai1;
