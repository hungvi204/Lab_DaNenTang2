import React from 'react';
import WrapInput from '../../components/WrapInput';
import { StyleSheet, View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';

const Lab1Bai3 = () => {
  return (
    <View style={styles.container}>
      <CustomTextInput
        title="Title"
        placeholder="Nhập tên người dùng"
        errorImageSource={require('../../assets/icons/mark.png')} />
      <CustomTextInput
        title="Title"
        placeholder="Nhập tên người dùng"
        errorImageSource={require('../../assets/icons/mark.png')} />
      <CustomTextInput
        title="Title"
        placeholder="Nhập tên người dùng"
        errorImageSource={require('../../assets/icons/mark.png')} />
      <CustomTextInput
        title="Title"
        placeholder="Nhập tên người dùng"
        error="Tên người dùng không hợp lệ"
        description="Tên người dùng phải dài ít nhất 6 ký tự"
        errorImageSource={require('../../assets/icons/mark.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  description: {
    color: 'gray',
    fontSize: 12,
  },
});

export default Lab1Bai3;
