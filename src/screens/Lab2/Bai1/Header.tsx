import React, { FC, memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { UserType } from './Main';

type HeaderType = {
    user: UserType;
}

const Header: FC<HeaderType> = memo(props => {
    const { user } = props;
    console.log('re-render Header');
    return (
        <View style={styles.container}>
            <Image
                resizeMode='center'
                style={{ width: 100, height: 100 }}
                source={{uri: user.avatar}}
            />
            <View>
                <Text>Chào ngày mới</Text>
                <Text style={styles.name}>{user.name}</Text>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: 100,
        backgroundColor: 'white'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});


export default Header;