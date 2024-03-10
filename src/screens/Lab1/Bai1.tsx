import React, { ReactNode } from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { create } from "react-test-renderer";
import Header from "../../components/Header";

const Lab1Bai1 = () => {
  return (
    <View>
      {/* Gọi Header custom component */}
      <Header
        title="Custom Header"
        iconLeft={require('../../assets/icons/back-button.png')}
        iconRight={require('../../assets/icons/mohawk.png')}
      />
      <Header
        title="Trang chủ"
        iconLeft={require('../../assets/icons/back-button.png')}
      />
      <Header iconLeft={require('../../assets/icons/back-button.png')} />

    </View>
  )
}
const styles = StyleSheet.create({

})

export default Lab1Bai1