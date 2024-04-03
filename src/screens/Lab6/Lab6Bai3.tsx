import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import  { useSignupMutation } from "../Lab6/pokemon";

const Lab6Bai3 = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        gender: ''
    });

    const [signup, { isLoading, isError, error }] = useSignupMutation();

    const handleSubmit = () => {
        signup(formData)
            .unwrap()
            .then((data) => {
                // Xử lý kết quả sau khi gửi thành công
                console.log('Signup success:', data);
                Alert.alert('Signup success:', JSON.stringify(data));
            })
            .catch((err) => {
                // Xử lý lỗi nếu có
                console.error('Signup error:', err);
                
            });
    };

    return (
        <View style={styles.container}>
            <Text>Form Builder Basic Demo</Text>
            <View style={styles.view}>
                <View>
                    <Text>Name</Text>
                    <TextInput
                        placeholder="Enter your name"
                        style={styles.input}
                        value={formData.name}
                        onChangeText={(text) => setFormData({ ...formData, name: text })}
                    />
                </View>
                <View>
                    <Text>Age</Text>
                    <TextInput
                        placeholder="Enter your age"
                        style={styles.input}
                        value={formData.age}
                        onChangeText={(text) => setFormData({ ...formData, age: text })}
                    />
                </View>
            </View>
            <View>
                <Text>Email</Text>
                <TextInput
                    placeholder="Enter your email"
                    style={styles.input}
                    value={formData.email}
                    onChangeText={(text) => setFormData({ ...formData, email: text })}
                />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    style={styles.input}
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                />
            </View>
            <View>
                <Text>Gender</Text>
                <TextInput
                    placeholder=""
                    style={styles.input}
                    value={formData.gender}
                    onChangeText={(text) => setFormData({ ...formData, gender: text })}
                />
            </View>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: '100%'
    }
});

export default Lab6Bai3;
