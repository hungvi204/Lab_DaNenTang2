import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React from 'react';
import { Button } from 'react-native';

GoogleSignin.configure({
  webClientId: '298373266211-ifph15lvm6gld0m8pulmvtnk8k858eh8.apps.googleusercontent.com',
});

function GoogleSignIn() {
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
  );
}

export default GoogleSignIn;
