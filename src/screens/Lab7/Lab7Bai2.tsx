import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin, User } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import React, { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Lab7Bai2 = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
    const [userInput, setUserInput] = useState({ email: '', password: '' });

    const onSignUpWithPassword = () => {
        auth()
            .createUserWithEmailAndPassword(userInput.email, userInput.password)
            .then(() => {
                Alert.alert('Tài khoản được tạo và đăng nhập thành công');
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Email đã được sử dụng');
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert('Email không hợp lệ');
                }
                console.error(error);
            });
    };

    const onSignInWithEmailAndPassword = () => {
        auth()
            .signInWithEmailAndPassword(userInput.email, userInput.password)
            .then(() => {
                Alert.alert('Đăng nhập thành công');
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                    Alert.alert('Sai tên đăng nhập hoặc mật khẩu');
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert('Email không hợp lệ');
                }
                console.error(error);
            });
    };

    const onSignOut = () => {
        auth()
            .signOut()
            .then(() => {
                Alert.alert('Đăng xuất thành công');
            });
    };

    GoogleSignin.configure({
        webClientId: "298373266211-ifph15lvm6gld0m8pulmvtnk8k858eh8.apps.googleusercontent.com"
    });

    const onSignUpWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken }: User = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(userState => {
            setUser(userState);
            if (initializing) setInitializing(false);
        });
        return subscriber;
    }, [initializing]);

    if (initializing) {
        return null;
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Lab7 Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={userInput.email}
                    onChangeText={text => setUserInput(prevState => ({ ...prevState, email: text }))}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={userInput.password}
                    secureTextEntry={true}
                    onChangeText={text => setUserInput(prevState => ({ ...prevState, password: text }))}
                />
                <Pressable style={styles.button} onPress={onSignInWithEmailAndPassword}>
                    <Text style={styles.text}>Log In</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={onSignUpWithPassword}>
                    <Text style={styles.text}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={onSignUpWithGoogle}>
                    <Text style={styles.text}>Sign In with google</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Xin chào {user?.email}</Text>
            <Pressable onPress={onSignOut} style={styles.button}>
                <Text style={styles.text}>Đăng xuất</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 400,
        marginVertical: 10,
        borderRadius: 15,
        padding: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        backgroundColor: '#FFCC33',
        padding: 10,
        marginVertical: 10,
        borderRadius: 15,
    },
});

export default Lab7Bai2;
