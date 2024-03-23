import React, { useCallback, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const colors = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'gray', 'purple', 'pink', 'orange'];

export interface UserType {
    name: string;
    avatar: string;
}

const Main = () => {
    const [timeUpdate, setTimeUpdate] = React.useState(new Date().toLocaleTimeString());
    const [footerColor, setFooterColor] = React.useState(colors[0]);
    const [user, setUser] = React.useState<UserType>({
        name: 'Nguyen Van A',
        avatar: 'https://tse3.mm.bing.net/th?id=OIP.ywHdSgiEyb--OBN2gD2w1QHaHa&pid=Api&P=0&h=220'
    });
    //cập nhật thông tin tài khoản 
    const updateInfo = useCallback((_user: UserType) => { //Sử dụng useCallback để tránh việc render lại khi state thay đổi
        setUser(_user);
    }, [])
    //cập nhật màu footer
    const changeColor = useCallback(() => {
        const index = Math.floor(Math.random() * colors.length);
        setFooterColor(colors[index]);
    }, [])

    useEffect(() => {
        setTimeUpdate(new Date().toLocaleTimeString());
        console.log(timeUpdate);
    }, [timeUpdate, footerColor]);
    return (
        <View style={styles.container}>
            <Header user={user} />
            <Body updateInfo={updateInfo} onClickChangeColor={changeColor}/>
            <Footer timeUpdate={timeUpdate} backgroundColor={footerColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
});
export default Main;