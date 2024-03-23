import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native';
import { UserType } from './Main';

type BodyType = {
    updateInfo: (user: UserType) => void;
    onClickChangeColor: () => void;
}

const Body: React.FC<BodyType> = (props) => {
    const {updateInfo, onClickChangeColor} = props;
    const [name, setName] = React.useState('');
    const [linkImage, setLinkImage] = React.useState('');

    const handleUpdateInfo = () => {
        console.log('re-render Body');
        if(name.length === 0 && linkImage.length === 0){
            ToastAndroid.show('Vui lòng nhập đầy đủ thông tin', ToastAndroid.SHORT);
        }else{
            updateInfo({name, avatar: linkImage});
        }
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Name' value={name} onChangeText={setName}/>
            <TextInput style={styles.input} placeholder='Avatar' value={linkImage} onChangeText={setLinkImage}/>
            <TouchableOpacity style={styles.button} onPress={handleUpdateInfo}>
                <Text style={styles.buttonText}>Cập nhật thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClickChangeColor}>
                <Text style={styles.buttonText}>Đổi màu footer</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});

export default Body;