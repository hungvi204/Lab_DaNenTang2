import React, { FC, memo } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

type FooterType = {
    timeUpdate: string;
    backgroundColor: string;
}

const Footer: FC<FooterType> = memo(({ timeUpdate, backgroundColor }) => {
    return (
        <View style={[containerStyle, { backgroundColor }]}>
            <Text style={styles.text}>Thời gian cập nhật thông tin: {timeUpdate}</Text>
        </View>
    );
});

const containerStyle: ViewStyle = {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Footer;
