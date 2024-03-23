import React, { useState, useMemo } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const UserMemo = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState<{ name: string; price: number; }[]>([]);

    const handleAdd = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }])
    }

    const total = useMemo(() => {//useMemo giúp giảm thiểu việc re-render khi state thay đổi
        console.log('Total re-render');
        return products.reduce((sum, product) => sum + product.price, 0);
    }, [products]);

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Enter your price" value={price} onChangeText={setPrice} />
            <Button title="Add" onPress={handleAdd} />
            <Text style={styles.text}>Total: {total}</Text>
            <View>
                {products?.map((prod, index) => (
                    <Text key={index} style={styles.text}>{prod.name} - {prod.price}</Text>
                ))}
            </View>
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
    },
    input: {
        height: 40,
        width: 320,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10
    }
})

export default UserMemo;