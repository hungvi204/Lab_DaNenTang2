import React from 'react';
import { Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View, } from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import LocalNotification from './localNotification';
import RemoteNotification from './RemoteNotification';

const Lab8Bai3 = () => {
  const isDarkMode =true
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{alignItems:'center',justifyContent:'center',flex:1,alignContent:'center'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View >
        <RemoteNotification />
          <Text> Push Notification!! </Text>
          <Button title={'Click Here'} onPress={LocalNotification} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lab8Bai3;